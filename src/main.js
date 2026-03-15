function swapImage() {
    var imageDisplayed = document.getElementById('display-image');
    if (imageDisplayed.src.match("/images/img01.jpg")) {
        imageDisplayed.src="/images/img02.jpg"
    }
    else {
        imageDisplayed.src = "/images/img01.jpg"
    }
}

function displayFunFact() {
    let funFactID = document.getElementById('display-fun-fact');
    funFactID.textContent = "My favorite sport is volleyball!"
}