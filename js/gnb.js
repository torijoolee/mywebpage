(() => {
  const gnbElem = document.querySelector(".gnb");
  const gnbHeight = gnbElem.getBoundingClientRect().height;

  function handleNavbarBg() {
    console.log(gnbHeight);

    if (window.scrollY > gnbHeight) {
      gnbElem.classList.add("On");
    } else {
      gnbElem.classList.remove("On");
    }
  }

  window.addEventListener("scroll", handleNavbarBg);
})();
