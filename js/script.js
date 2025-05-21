let heading = document.querySelectorAll("h1");
let arr = Array.from(heading);

arr.map((item) => {
  let count = 0;

  function counterJs() {
    let increment = item.dataset.number/10
    count += increment;
    item.innerHTML = `${count}+`;

    if (count == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(() => {
    counterJs();
  }, 120);
});
