let a = document.getElementById("a-container");
let b = document.getElementById("b-container");
function changeClass1() {
    document.getElementById("a-container").className = "container a-container is-hidden";
    document.getElementById("b-container").className = "container b-container no-hidden";
}
function changeClass2() {
    document.getElementById("a-container").className = "container a-container no-hidden";
    document.getElementById("b-container").className = "container b-container is-hidden";
}
