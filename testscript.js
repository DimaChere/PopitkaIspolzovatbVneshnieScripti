"use strict";
function animateDots() {
  let dots = document.getElementsByClassName("script-part__dot");
  let i = 0;
  let int = setInterval(() => {
    if (i >= dots.length - 1) {
      clearInterval(int);
    }
    dots[i].style.backgroundColor = "rgb(245 222 25)";
    i++;
  }, 200);
  i = 0;
}
