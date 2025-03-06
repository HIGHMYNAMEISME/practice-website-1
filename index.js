const sideClose = document.getElementById("sideClose");
const sideOpen = document.getElementById("sideOpen");
const contents = document.getElementById("contents");

sideClose.onclick = function(){
  contents.style.display = "none";
  sideOpen.style.display = "block";
}

sideOpen.onclick = function(){
  contents.style.display = "flex";
  sideOpen.style.display = "none";
}