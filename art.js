let hello = document.querySelector(".prev");
let menu = document.querySelector(".next");


menu.addEventListener("click", function() {
  console.log("menu works");
  hello.style.display = "block";
});

menu.addEventListener("click", function (){
  console.log("menuworks");
  hello.style.display = "none";
});
