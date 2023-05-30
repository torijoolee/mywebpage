(() => {
  const workBtnWrap = document.querySelector(".btn-wrap");
  const imgWrap = document.querySelectorAll(".img-item");
  const portfolioContent = document.querySelector(".portfolio-content");

  function handleTarget(e) {
    const filter = e.target.dataset.filter;
    if (filter == null) return;
    for (let i = 0; i < imgWrap.length; i++) {
      portfolioContent.classList.add("On");
      setTimeout(() => {
        if (filter == "*" || filter == imgWrap[i].dataset.type) {
          imgWrap[i].classList.remove("On");
        } else {
          imgWrap[i].classList.add("On");
        }
        portfolioContent.classList.remove("On");
      }, 300);
    }
  }
  workBtnWrap.addEventListener("click", handleTarget);
})();
