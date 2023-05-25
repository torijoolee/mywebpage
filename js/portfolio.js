(() => {
  const workBtnWrap = document.querySelector(".btn-wrap");
  const imgWrap = document.querySelectorAll(".img-item");

  function handleTarget(e) {
    const filter = e.target.dataset.filter;
    if (filter == null) return;
    for (let i = 0; i < imgWrap.length; i++) {
      if (filter == "*" || filter == imgWrap[i].dataset.type) {
        imgWrap[i].classList.remove("On");
      } else {
        imgWrap[i].classList.add("On");
      }
    }
  }
  workBtnWrap.addEventListener("click", handleTarget);
})();
