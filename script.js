const btn = document.querySelector(".buy_button")
const section = document.querySelector(".main_fourth--section")
btn.addEventListener("click", () => {
    section.scrollIntoView({ behavior: "smooth" })
})