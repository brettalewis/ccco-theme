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
  console.log('top distance', topDist)
  console.log('distance', distance);
  console.log('offset', offset);
  console.log('stickpoint', stickPoint);
  if ( (distance <= 0) && !stuck) {
    console.log('ADD CLASS'); 
    h.classList.add('sticky-header');
    stuck = true;
  } else if (stuck && (distance > 0)){
    console.log('REMOVE CLASS');
    h.classList.remove('sticky-header');
    stuck = false;
  }
}
