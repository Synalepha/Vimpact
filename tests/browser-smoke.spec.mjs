import { test, expect } from "@playwright/test";

const routes = ["/", "/action-agenda.html", "/progress-map.html", "/impact-cafes.html", "/join.html", "/contact-1.html", "/zim.html", "/forums.html", "/donate.html"];

for (const route of routes) {
  test(`${route} renders without horizontal overflow`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("main h1").first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
}

test.describe("mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens, closes with Escape, and returns focus", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Menu" });
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeHidden();
    await toggle.click();
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Home", exact: true })).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("navigation", { name: "Primary" })).toBeHidden();
    await expect(toggle).toBeFocused();
  });
});

test("desktop navigation remains visible", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
  await expect(page.locator(".opening")).toHaveCSS("display", "grid");
});

test("map filters time and opens historical context", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/progress-map.html");
  await expect(page.locator("#progress-canvas")).toBeVisible();
  await expect(page.locator("#map-stage")).toHaveAttribute("data-map-ready", "true");
  expect(errors).toEqual([]);
  await expect(page.locator(".map-list-card")).toHaveCount(64);
  await page.locator("#year-range").evaluate((range) => { range.value = "1900"; range.dispatchEvent(new Event("input", { bubbles: true })); });
  await expect(page.locator(".map-list-card")).toHaveCount(12);
  await page.locator(".map-list-card").first().click();
  await expect(page.locator("#node-detail")).toContainText("thematic editorial connections");
  await expect(page.locator("#node-detail")).toContainText("Why it appears in the map");
  await expect(page.locator("#node-detail .related-nodes button")).toHaveCount(3);
  await page.getByRole("button", { name: "Human well-being" }).click();
  await expect(page.getByRole("button", { name: "Human well-being" })).toHaveAttribute("aria-pressed", "true");
});

test("map retains a meaningful visual when JavaScript is unavailable", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("/progress-map.html");
  await expect(page.locator(".map-fallback")).toBeVisible();
  await expect(page.locator(".map-fallback circle")).toHaveCount(14);
  await expect(page.locator(".map-fallback")).toContainText("1789—2026");
  await context.close();
});

for (const viewport of [
  { name: "320px phone", width: 320, height: 568 },
  { name: "360px phone", width: 360, height: 740 },
  { name: "390px phone", width: 390, height: 844 },
  { name: "430px phone", width: 430, height: 932 },
  { name: "phone landscape", width: 844, height: 390 },
  { name: "tablet portrait", width: 768, height: 1024 },
]) {
  test(`map survives ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/progress-map.html");
    const metrics = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
      stage: document.querySelector("#map-stage").getBoundingClientRect().width,
      canvas: document.querySelector("#progress-canvas").getBoundingClientRect().width,
    }));
    expect(metrics.document).toBe(metrics.viewport);
    expect(Math.abs(metrics.stage - metrics.canvas)).toBeLessThan(1);
    await expect(page.locator("#year-range")).toBeVisible();
    await expect(page.locator(".map-list-card")).toHaveCount(64);
  });
}

test.describe("touch map interaction", () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

  test("filters, scrubs time, and handles a drag gesture", async ({ page }) => {
    await page.goto("/progress-map.html");
    await page.locator('#year-range').evaluate((range) => { range.value = "1970"; range.dispatchEvent(new Event("input", { bubbles: true })); });
    await expect(page.locator("#year-output")).toHaveText("1970");
    const stage = page.locator("#map-stage");
    const box = await stage.boundingBox();
    await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
    await stage.dispatchEvent("pointerdown", { pointerId: 1, pointerType: "touch", clientX: box.x + 100, clientY: box.y + 200 });
    await stage.dispatchEvent("pointermove", { pointerId: 1, pointerType: "touch", clientX: box.x + 180, clientY: box.y + 240 });
    await stage.dispatchEvent("pointerup", { pointerId: 1, pointerType: "touch", clientX: box.x + 180, clientY: box.y + 240 });
    await page.getByLabel("Movements").uncheck();
    await expect(page.getByLabel("Movements")).not.toBeChecked();
    await expect(page.locator(".map-list-card")).not.toHaveCount(0);
  });
});
