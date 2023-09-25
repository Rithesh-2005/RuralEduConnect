// let name="robert";
// document.getElementById("p1").innerHTML = "lorem ipsum  "+name;
// const  x = 5;
// console.log(x+10);
// const y = 10;
// console.log(y+10);
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");
document.onload = () => {
    console.log(navToggle)
    navToggle.addEventListener("click", (e) => {
        navList.classList.toggle("shown")
    })
}