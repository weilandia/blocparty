export function colorsSample(reject_color) {
  let colors = colorCollection();

  if(reject_color) {
    colors.splice(colors.indexOf(reject_color), 1);
  }
  return colors[Math.floor(Math.random() * colors.length)];
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function colorCollection(){
  return [ "#0033FF", "#00FFFF", "#FF00FF", "#9D00FF"];
}