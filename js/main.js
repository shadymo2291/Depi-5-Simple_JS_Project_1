
// Control The Text

let btns = document.querySelectorAll(".btn")

let text = document.querySelector(".text")


btns.forEach((btn) => {
    btn.onclick = function() {
        text.style.color = btn.dataset.color;
        text.style.textAlign = btn.dataset.location
    }
})