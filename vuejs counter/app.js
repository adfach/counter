const countValue = document.getElementById("value");
const countDecrease = document.getElementById("decrease");
const countIncrease = document.getElementById("increase");
const countReset = document.getElementById("reset");
let count = 0;

countValue.innerText = count;

countIncrease.addEventListener("click", () => {
  count++;
  countValue.textContent = count;
  // alert("Button clicked!");
  // countValue.innerText = parseInt(countValue.innerText) + 1;
});

countDecrease.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countValue.textContent = count;
  } else {
    alert("Counter tidak bisa kurang dari 0");
  }
  // alert("Button clicked!");
  // countValue.innerText = parseInt(countValue.innerText) - 1;
});

countReset.addEventListener("click", () => {
  alert("Yaqin mau Dihapus?💥💥");
  countValue.innerText = 0;
});
