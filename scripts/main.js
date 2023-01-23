var moreInfo = document.getElementsByClassName("go-to-about");

<script>
  AOS.init();
</script>


moreInfo[0].addEventListener("click", () => {
    goToPage("about.html")
})

function goToPage(page) {
    location.replace(page)
}