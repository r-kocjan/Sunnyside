const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("show");
  //   menu.style.visibility = "visible";
  //   menu.style.transform = "translateX(-50%) scale(1)";
  //   menu.style.opacity = "1";
});
