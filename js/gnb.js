(() => {
  const gnbElem = document.querySelector(".gnb");
  const gnbHeight = gnbElem.getBoundingClientRect().height;
  const gnbMoBtn = document.querySelector(".gnb-button");
  const gnbMo = document.querySelector(".gnb-mo");
  function handleNavbarBg() {
    if (window.scrollY > gnbHeight) {
      gnbElem.classList.add("On");
    } else {
      gnbElem.classList.remove("On");
    }
  }

  function handleMoGnb() {
    gnbMo.classList.toggle("On");
  }
  gnbMoBtn.addEventListener("click", handleMoGnb);
  window.addEventListener("scroll", handleNavbarBg);
})();
