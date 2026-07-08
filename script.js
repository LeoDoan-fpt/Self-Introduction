function upDate(previewPic) {
    console.log("Mouse or keyboard event triggered");
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Preview reset");

    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
}

function addTabFocus() {
    console.log("Adding tabindex to gallery images");

    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
