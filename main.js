window.addEventListener("scroll", function () {
    var navbar = document.getElementById("ftco-navbar");
    if (window.scrollY> 0) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  });
