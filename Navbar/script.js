document.getElementById("close").addEventListener("click", closeBtn);
function closeBtn() {
  document.getElementById("navbar").style.height = "0%";
}

document.getElementById("open").addEventListener("click", openMenu);

function openMenu() {
  document.getElementById("navbar").style.height = "100%";
}
