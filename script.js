const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px"
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
  revealObserver.observe(item);
});
