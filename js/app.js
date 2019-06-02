function getSlide(content, active = false) {
  var slide = '';
  if (active) {
    slide += '<div class="carousel-item active">';
  } else {
    slide += '<div class="carousel-item">';
  }
  slide += '<div class="d-flex align-items-center justify-content-center w-100 vh-100 display-2">';
  slide += content;
  slide += '</div>';
  slide += '</div>';
  return slide;
}

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

var html = '';

for (var i = 0; i <= slides.length; i++) {
  if (i == slides.length) {
    html += getSlide('<a href="index.html" class="btn btn-lg btn-success">Finished!</a>');
  } else {
    var question = slides[i][0] + ' x ' + slides[i][1];
    var answer = slides[i][2];
    if (i == 0) {
      html += getSlide(question, true);
    } else {
      html += getSlide(question);
    }
    html += getSlide(answer);
  }
}

$(".carousel-inner").html(html);
