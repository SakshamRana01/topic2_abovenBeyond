function changeColor(lightId) {
  var color = prompt("Enter a color:");
  document.getElementById(lightId).style.backgroundColor = color;
  var lightColor = document.getElementById(lightId).style.backgroundColor;
  var lightInfo = "<p>" + lightId + " color: " + lightColor + "</p>";
  document.getElementById(lightId).insertAdjacentHTML("afterend", lightInfo);
}


