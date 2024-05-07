const skillSection = document.getElementById("skills");
const fadeElements = skillSection.querySelectorAll(".fade-in");

ScrollTrigger.create({
  trigger: skillSection,
  start: "top 80%",
  end: "bottom 20%",
  onEnter: () => {
    fadeElements.forEach((fadeEl, index) => {
      gsap.to(fadeEl, {
        opacity: 1,
        duration: 0.5,
        delay: (index + 1) * 0.3,
      });
    });
  },
  onLeaveBack: () => {
    fadeElements.forEach((element) => {
      gsap.set(element, { opacity: 0 });
    });
  },
});
