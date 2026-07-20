const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#primary-nav");
if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
    nav.hidden = !open;
  };
  const sync = () => {
    if (innerWidth > 800) {
      nav.hidden = false;
      toggle.textContent = "Menu";
      toggle.setAttribute("aria-expanded", "false");
    } else if (toggle.getAttribute("aria-expanded") === "false")
      nav.hidden = true;
  };
  toggle.addEventListener("click", () =>
    setOpen(toggle.getAttribute("aria-expanded") !== "true"),
  );
  nav.addEventListener("click", (event) => {
    if (innerWidth <= 800 && event.target.closest("a")) setOpen(false);
  });
  nav.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      toggle.focus();
    }
  });
  addEventListener("resize", sync);
  sync();
}
