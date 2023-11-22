let nav = document.querySelector("nav");
let downloadBtn =document.querySelectorAll(".downloadBtn")
let link =document.querySelectorAll(".nav_tag_a")
let menu = document.getElementById("menu");
let popbox = document.getElementById("popbox");
window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
      }else {
        nav.classList.remove("sticky");
      }
}
menu.onclick = () => {
  popbox.className = "pop";
};
remove.onclick = () => {
  popbox.className = "hide";
};
linkdin.onclick=()=>{
    location.href="https://www.linkedin.com/in/suraj-sakhare10/"
}
github.onclick=()=>{
    location.href="https://github.com/SurajSakhare100"
}