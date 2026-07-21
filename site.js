const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#primary-nav");
if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
    nav.hidden = !open;
  };
  const sync = () => {
    if (innerWidth > 760) {
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
    if (innerWidth <= 760 && event.target.closest("a")) setOpen(false);
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

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    status.textContent = "This migrated preview cannot deliver messages yet. Please use the V-Impact Substack link below while the contact endpoint is configured.";
    status.focus?.();
  });
}
