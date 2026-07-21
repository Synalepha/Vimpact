import { test, expect } from "@playwright/test";

const routes = ["/", "/action-agenda.html", "/impact-cafes.html", "/join.html", "/contact-1.html", "/zim.html", "/forums.html", "/donate.html"];

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
