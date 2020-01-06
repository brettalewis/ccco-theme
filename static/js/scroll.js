var h = document.getElementById("header");
var stuck = false;
var stickPoint = getTopDistance();

function getTopDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var topDist = getTopDistance();
  var offset = window.pageYOffset;
  var distance = topDist - offset;
  if ( (distance <= 0) && !stuck) {
    h.classList.add('sticky-header');
    stuck = true;
  } else if (stuck && (distance > 0)){
    h.classList.remove('sticky-header');
    stuck = false;
  }
}
