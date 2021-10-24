document.getElementById("check1").addEventListener("click", addPoints);
document.getElementById("check2").addEventListener("click", addPoints);
document.getElementById("check3").addEventListener("click", addPoints);
document.getElementById("check4").addEventListener("click", addPoints);
document.getElementById("check5").addEventListener("click", addPoints);

var points = 0;

function addPoints() {
    points += 10;
    document.getElementById('crumbs').innerHTML = points;
}
