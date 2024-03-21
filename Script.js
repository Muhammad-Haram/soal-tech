let navInfo = document.querySelector(".nav-info");
let nav = document.querySelector(".bar");
let closeBtn = document.querySelector(".close");
console.log(navInfo)
console.log(closeBtn)
console.log(nav)

nav.addEventListener("click", () => {
    if (nav) {
        navInfo.classList.add("show");
    }
});

closeBtn.addEventListener("click", () => {
    if (closeBtn) {
        navInfo.classList.remove("show");
    }
})