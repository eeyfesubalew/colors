const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
btn.addEventListener("click", function (e) {
  let color1 = Math.ceil(Math.random() * 255);
  let color2 = Math.ceil(Math.random() * 255);
  let color3 = Math.ceil(Math.random() * 255);
  container.style.backgroundColor = `rgba(${color1},${color2},${color3})`;
});

// const colors = [
//   "Orangered",
//   "Blue",
//   "Yellow",
//   "Green",
//   "Orange",
//   "Cyan",
//   "DodgerBlue",
//   "Violet",
//   "Navy",
//   "Purple",
//   "YellowGreen",
//   "OrangeRed",
//   "SlateBlue",
//   "Salmon",
//   "Crimson",
//   "HotPink",
//   "Magenta",
// ];
// btn.addEventListener("click", function (e) {
//   let ran = Math.ceil(Math.random() * colors.length);
//   container.style.backgroundColor = `${colors[ran]}`;
// });
