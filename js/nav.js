function nav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header-nav") {
    x.className += "--responsive";
  } else {
    x.className = "header-nav";
12  }
}
