const decouvrir = document.getElementById("decouvrir");
const scroller = document.querySelector(".activites_container");
let deplacement = 0;
const cpt = 1000;
window.addEventListener("load", (e) => {
  e.preventDefault();
  for (i = -300; i != deplacement; console.log(deplacement)) {
    deplacement -= 5;
    scroller.style.transform = `translateX(${deplacement}px)`;
  }
});

function changePage() {
  location.href = "apropos.html";
}
