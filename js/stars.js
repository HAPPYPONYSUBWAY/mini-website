const stars = document.getElementById('stars');
const stars2 = document.getElementById('stars2');
const stars3 = document.getElementById('stars3');

stars.style.background = "url('https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/media/star.png') repeat";
stars2.style.background = "url('https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/media/star.png') repeat";
stars3.style.background = "url('https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/media/star.png') repeat";

stars.style.animation = "moveStars 100s linear infinite";
stars2.style.animation = "moveStars 150s linear infinite";
stars3.style.animation = "moveStars 200s linear infinite";

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes moveStars {
  0% { transform: translateY(0); }
  100% { transform: translateY(-2000px); }
}
`, styleSheet.cssRules.length);
