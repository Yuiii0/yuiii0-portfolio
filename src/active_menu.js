//구현 계획
//1. 모든 섹션요소 & 메뉴 아이템을 가지고온다 (queryselector)
//1. 모든 섹션요소 & 메뉴 아이템들을 가지고온다
const sectionIds = ["#home", "#about", "#skills", "#projects", "#contact"];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false); //초기화
let activeNavItem = navItems[0];

//2. IntersectionObserver를 사용해서 모든 섹션들을 관찰
const options = {
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne; //마지막 section flag변수
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`); //현재 뷰포트에 있는 section index찾기
    visibleSections[index] = entry.isIntersecting; //섹션들 flag update
    selectLastOne = //flag가 true가된다
      index === sectionIds.length - 1 && //현재 뷰포트가 마지막섹션이고
      entry.isIntersecting && //intersect가 true이고
      entry.intersectionRatio >= 0.95; //99%이상 화면에 들어오면
  });

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
  selectNavItem(navIndex);
}

function findFirstIntersecting(intersections) {
  //먼저 오는 첫번째 섹션찾기
  const index = intersections.indexOf(true); //indexof는 첫번재 한개만 찾아줌
  return index >= 0 ? index : 0; //true가 없다면 가장 첫번재 인덱스가되도록 설정
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return; //rnage out되면
  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}

//3. 보여지는 섹션에 해당하는 메뉴 아이템 활성화
//-다수의 섹션의 동시에 보여지는 경우 -> 먼저 오는 (첫번째) 섹션 선택

//-마지막 contact 섹션 보여지는 경우-> 마지막 섹션 선택
