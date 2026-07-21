const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#primary-nav");

if (toggle && nav) {
  const desktop = matchMedia("(min-width: 821px)");

  const setOpen = (open, returnFocus = false) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
    nav.hidden = !open;
    document.body.classList.toggle("menu-open", open);
    if (open) nav.querySelector("a")?.focus();
    if (!open && returnFocus) toggle.focus();
  };

  const sync = () => {
    if (desktop.matches) {
      nav.hidden = false;
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Menu";
      document.body.classList.remove("menu-open");
    } else {
      setOpen(false);
    }
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  nav.addEventListener("click", (event) => {
    if (!desktop.matches && event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false, true);
    }
  });

  document.addEventListener("click", (event) => {
    if (!desktop.matches && toggle.getAttribute("aria-expanded") === "true" && !event.target.closest("header")) {
      setOpen(false);
    }
  });

  desktop.addEventListener("change", sync);
  sync();
}
