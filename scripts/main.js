var moreInfo = document.getElementsByClassName("go-to-about");


moreInfo[0].addEventListener("click", () => {
    goToPage("about.html")
})

function goToPage(page) {
    location.replace(page)
}