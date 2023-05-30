(() => {
  let item = document.querySelectorAll(".ani");
  let observer = new IntersectionObserver((e) => {
    e.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add("moving");
      } else {
        item.target.classList.remove("moving");
      }
    });
  });
  item.forEach((elem) => {
    for (let i = 0; i < item.length; i++) {
      observer.observe(item[i]);
    }
  });
})();
