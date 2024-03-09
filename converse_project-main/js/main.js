// slider start
const container = document.querySelector(".container");
const sliderMain = document.querySelector(".slider-main");
const sliderItems = document.querySelectorAll(".slider-item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotItems = document.querySelectorAll(".slider-dot-item");

const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderLength = sliderItems.length;

let positionX = 0;
let index = 0;
// setInterval(() => {
//   handerChangeSlide(1);
// }, 3000);
nextBtn.addEventListener("click", () => {
  handerChangeSlide(1);
});

prevBtn.addEventListener("click", () => {
  handerChangeSlide(-1);
});

[...dotItems].forEach((item) =>
  item.addEventListener("click", (e) => {
    [...dotItems].forEach((ele) => ele.classList.remove("isSelect"));
    e.target.classList.add("isSelect");
    const slideIndex = parseInt(e.target.dataset.index);
    index = slideIndex;
    positionX = -1 * index * sliderItemWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
  })
);
function handerChangeSlide(dir) {
  if (dir === 1) {
    if (index >= sliderLength - 1) {
      index = sliderLength - 1;
      return;
    }
    positionX = positionX - sliderItemWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
    index++;
  } else if (dir === -1) {
    if (index <= 0) {
      index = 0;
      return;
    }
    positionX = positionX + sliderItemWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
    index--;
  }
  [...dotItems].forEach((ele) => ele.classList.remove("isSelect"));
  dotItems[index].classList.add("isSelect");
}

//slider end
