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

// inner navbar / tab section

var allBtns = document.querySelectorAll(".tab-btn");

for (let b = 0; b < allBtns.length; b++) {
    allBtns[b].addEventListener("click", function () {
        const data = this.dataset.tab;
        const ids = document.getElementById(data);

        var allContent = document.querySelectorAll(".tabcontent");

        for (let s = 0; s < allContent.length; s++) {
            allContent[s].style.display = "none";
        }

        for (let s = 0; s < allBtns.length; s++) {
            allBtns[s].classList.remove("active");
        }

        this.classList.add("active");
        ids.style.display = "block";
    });
}

document.querySelector(".tab-btn").click();