document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    mantul();
  });
});

function mantul() {
  setTimeout(function () {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (window.innerWidth < 800) {
      window.scrollTo({ top: y - 400, behavior: "smooth" });
    } else {
      window.scrollTo({ top: y - 200, behavior: "smooth" });
    }
  }, 500);
}

function hideShow() {
  let elements = document.querySelectorAll(".list-menu");
  // using forEach loop
  elements.forEach((element) => {
    if (element.style.display == "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

function hide() {
  let elements = document.querySelectorAll(".list-menu");
  elements.forEach((element) => {
    if (element.style.display == "block") {
      element.style.display = "none";
    }
  });
}
