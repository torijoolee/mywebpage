(() => {
  const workBtnWrap = document.querySelector(".btn-wrap");
  const imgWrap = document.querySelectorAll(".img-wrap");
  function handleTarget(e) {
    const filter = e.target.dataset.filter;
    console.log(filter);
  }
  workBtnWrap.addEventListener("click", handleTarget);
})();
