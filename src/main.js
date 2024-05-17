//Home
new TypeIt("#type", {
  strings: "Front-end Developer",
  speed: 75,
  loop: true,
}).go();

//About
const listItems = document.querySelectorAll(".list-item");
const helloImage = document.querySelector(".hello-img-container");
const listStyleChangeStartY = 240;
const listStyleChangeEndY = 1000;
const division =
  (listStyleChangeEndY - listStyleChangeStartY) / listItems.length;

window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (document.getElementById("on"))
    document.getElementById("on").removeAttribute("id"); //나타나고없어지고 반복
  if (
    window.scrollY > listStyleChangeStartY &&
    window.scrollY < listStyleChangeEndY
  ) {
    //start지점부터 얼마나 스크롤했는지
    const targetIndex = Math.floor(
      (window.scrollY - listStyleChangeStartY) / division
    );

    listItems[targetIndex].id = "on";
  }

  const scrollYBottom = window.scrollY + document.documentElement.clientHeight;

  if (
    scrollYBottom > helloImage.offsetTop + 50 &&
    scrollYBottom < helloImage.offsetTop + helloImage.offsetHeight + 100
  ) {
    console.log("run");
    const translateX =
      80 -
      (80 * 1.3 * (scrollYBottom - helloImage.offsetTop)) /
        (helloImage.offsetHeight + 100);
    const translateY =
      -30 +
      (30 * 1.3 * (scrollYBottom - helloImage.offsetTop)) /
        (helloImage.offsetHeight + 100);
    const rotateDegree =
      -(5 * 1.7 * (scrollYBottom - helloImage.offsetTop)) /
      (helloImage.offsetHeight + 100);
    helloImage.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotateDegree}deg)`;
  }
});

//nav
document.querySelectorAll(".header__menu__item").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작 막기

    const targetId = this.getAttribute("href"); // 클릭한 링크의 href 속성 값 가져오기
    const targetElement = document.querySelector(targetId); // 해당 ID를 가진 요소 찾기

    if (targetElement) {
      if (targetId === "#projects") {
        const stickyParent = document.querySelector(".sticky-parent");
        if (stickyParent) {
          stickyParent.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});
