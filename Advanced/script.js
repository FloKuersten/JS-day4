

// When you hover on the circle, you will see a message under it : "you are in the circle".
document.getElementById("circle").addEventListener("mouseover", messageInCircle);

function messageInCircle() {
    document.getElementById("text").innerHTML = "You are in the circle";
}


// When the mouse leaves the circle you will see the message under it : "you are outside of the circle".
document.getElementById("circle").addEventListener("mouseout", messageOutCircle);

function messageOutCircle() {
    document.getElementById("text").innerHTML = "You are outside of the circle";
}


// When you click on the circle, the background will change to gray.

document.getElementById("circle").addEventListener("click", bgGrey);

function bgGrey() {
    document.getElementById("circle").style.backgroundColor = "grey";
}

// When you double-click on the circle, the background will change to blue. 

document.getElementById("circle").addEventListener("dblclick", bgBlue);

function bgBlue() {
    document.getElementById("circle").style.backgroundColor = "blue";
}