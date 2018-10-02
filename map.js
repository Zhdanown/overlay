
var overlay;
ImgOverlay.prototype = new google.maps.OverlayView();
console.log('asd');

// Initialize map
function initMap () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 62.323907, lng: - 150.109291},
    mapTypeId: 'satellite'
  });

  var bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(62.281819, -150.287132),
    new google.maps.LatLng(62.400471, -150.005608));

    var srcImage = 'http://placehold.it/300x200';

    overlay = new ImgOverlay(bounds, srcImage, map);
}
// constructor
function ImgOverlay(bounds, image, map) {
  this.bounds_ = bounds;
  this.image_ = image;
  this.map_ = map;

  this.div_ = null;

  this.setMap(map);
}

ImgOverlay.prototype.onAdd = function () {
  var div = document.createElement('div');
  div.style.borderStyle = 'none';
  div.style.borderWidth = '0px';
  div.style.position = 'absolute';

  var img = document.createElement('img');
  img.src = this.image_;
  img.style.width = '100%';
  img.style.heght = '100%';
  img.style.position = 'absolute';
  div.appendChild(img);

  this.div_ = div;
  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
};

ImgOverlay.prototype.draw = function () {

  var overlaayProjection = this.getProjection();

  var sw = overlaayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlaayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

  var div = this.div_;
  div.style.left = sw.x + 'px';
  div.style.top = ne.y + 'px';
  div.style.width = (ne.x - sw.x) + 'px';
  div.style.width = (sw.y - ne.y) + 'px';
};

ImgOverlay.prototype.onRemove = function () {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};
