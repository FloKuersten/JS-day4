

document.getElementById("button").addEventListener("click", changeColour);

function changeColour() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var bgColour ="rgb(" + r +", " + g + ", " + b +")";
    document.body.style.backgroundColor = bgColour;
    document.getElementById("background").innerHTML = "This is the colour: " + bgColour;
}