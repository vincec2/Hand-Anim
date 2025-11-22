document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.getElementById("contact");
  const contactTrigger = document.getElementById("contact-trigger");
  const hand = document.querySelector(".hand-cta");
  const pageShell = document.querySelector(".page-shell");

  if (!contactTrigger || !hand || !pageShell || !contactSection) {
    return;
  }

  contactTrigger.addEventListener("click", (event) => {
    event.preventDefault();

    // Prevent double-trigger
    if (hand.classList.contains("is-running")) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      return;
    }

    hand.classList.add("is-running", "is-visible");

    // Stage 1: hand slides down & page crumples
    requestAnimationFrame(() => {
      hand.classList.add("is-grabbing");
      pageShell.classList.add("is-crumpled");
    });

    // Stage 2: hand pulls up + start smooth scroll
    setTimeout(() => {
      hand.classList.add("is-pulling");
      contactSection.scrollIntoView({ behavior: "smooth" });
    }, 350);

    // Stage 3: cleanup classes
    setTimeout(() => {
      hand.className = "hand-cta"; // reset to base
      pageShell.classList.remove("is-crumpled");
    }, 1200);

    setTimeout(() => {
      hand.classList.remove("is-running");
    }, 1300);
  });
});
