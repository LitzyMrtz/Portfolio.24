

// menu function//
let hello = document.querySelector(".icon-bar");
let menu = document.querySelector(".buttonMenu");


menu.addEventListener("mouseenter", function() {
  console.log("menu works");
  hello.style.display = "block";
});

menu.addEventListener("click", function (){
  console.log("menuworks");
  hello.style.display = "none";
});
