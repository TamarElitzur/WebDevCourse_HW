const skins = [
  "SKINS/basic.css",
  "SKINS/modern.css",
  "SKINS/dark.css",
];

let currentSkinIndex = 0;


const skinLink = document.getElementById("skinStylesheet");
const button   = document.getElementById("changeSkinBtn");

button.addEventListener("click", function () {

  currentSkinIndex = (currentSkinIndex + 1) % skins.length;

  skinLink.href = skins[currentSkinIndex];
});
