const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scaledRange(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scaledRange(load, 0, 100, 30, 0)}px)`;
}

const scaledRange = (curr, driveMin, driveMax, mapStart, mapEnd) => {
  return (
    ((curr - driveMin) * (mapEnd - mapStart)) / (driveMax - driveMin) + mapStart
  );
};
