function openNav() {
  document.getElementById("left-navbar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("left-navbar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//Media query
if (window.matchMedia("(max-width: 900px)").matches) {
  /* The viewport is less than, or equal to, 700 pixels wide */
  function openNav() {
    document.getElementById("left-navbar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
  }

  function closeNav() {
    document.getElementById("left-navbar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
} else {
  /* The viewport is greater than 700 pixels wide */
}
