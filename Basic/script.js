
document.getElementById("submit").addEventListener("click", showData);

function showData() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let age = Number(document.getElementById("age").value);
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = firstname + lastname + age;
}