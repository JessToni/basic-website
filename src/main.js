function swapImage() {
    var imageDisplayed = document.getElementById('display-image');
    if (imageDisplayed.src.match("/images/01.png")) {
        imageDisplayed.src="/images/02.png"
    }
    else {
        imageDisplayed.src = "/images/01.png"
    }
}