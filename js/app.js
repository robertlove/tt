var slides = [];

for (var i = 1; i <= 12; i++) {
  for (var j = 1; j <= 12; j++) {
    slides.push([i, j, i*j]);
  }
}

var currentIndex = slides.length, temporaryValue, randomIndex;

while (0 !== currentIndex) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = slides[currentIndex];
  slides[currentIndex] = slides[randomIndex];
  slides[randomIndex] = temporaryValue;
}

var html = "";

for (var i = 0; i < slides.length; i++) {
  if (i == 0) {
    html += `<div class="carousel-item active">${slides[i][0]} x ${slides[i][1]}</div><div class="carousel-item">${slides[i][2]}</div>`;
  } else {
    html += `<div class="carousel-item">${slides[i][0]} x ${slides[i][1]}</div><div class="carousel-item">${slides[i][2]}</div>`;
  }
}

$(".carousel-inner").html(html);
