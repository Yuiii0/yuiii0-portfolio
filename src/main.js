//Home
new TypeIt("#type", {
  strings: "Front-end Developer",
  speed: 75,
  loop: true,
}).go();

//About
const listItems = document.querySelectorAll(".list-item");

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
});
