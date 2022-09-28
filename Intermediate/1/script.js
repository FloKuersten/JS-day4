function removeSanta() {
    this.style.opacity = "0";
    this.style.transition = "1s";
    setTimeout(() => {
        this.remove();
    }, 1000);
}




//document.getElementsByClassName("santa")[0].onclick = removeSanta;
var santas = document.getElementsByClassName("santa");
for (let i = 0; i < santas.length; i++) {
    santas[i].addEventListener("click", removeSanta);
}

