function upDate(previewPic) {
    console.log("Mouse over event triggered");
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Mouse out event triggered");

    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
}
