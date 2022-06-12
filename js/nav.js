function nav() {
  var x = document.getElementById("myTopnav");
  const mode = document.getElementById("mode");
  if (x.className === "header-nav") {
    x.className += "--responsive";
    mode.className += "--hide";
  } else {
    x.className = "header-nav";
    mode.className = "toggle";
  }
}
