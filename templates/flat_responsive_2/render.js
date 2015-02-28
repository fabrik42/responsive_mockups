var screenshotDir = '../../screenshots/flat_responsive_2';

var canvas = document.createElement('canvas');
canvas.width = metadata.mockup.width;
canvas.height = metadata.mockup.height;
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');

function drawLayer(options) {
  var img = document.createElement('img');

  img.onload = function() {
    ctx.drawImage(img, 0, 0, img.width, img.height);
    tick();
  };

  img.src = options.src;
}

function drawScreenshot(options) {
  var img = document.createElement('img');
  var layerType = options.layer;
  var data = metadata.layers.filter(function(l) { return l.type == layerType; })[0];

  if (!data) throw('No metadata found for layer ' + layerType);

  img.onload = function() {
    var width = data.bottomRight.x - data.topLeft.x;
    var widthRatio = width / img.width;
    var heightRation = widthRatio; // we keep the ratio in any case

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(data.topLeft.x, data.topLeft.y);
    ctx.lineTo(data.bottomRight.x, data.topLeft.y);
    ctx.lineTo(data.bottomRight.x, data.bottomRight.y);
    ctx.lineTo(data.topLeft.x, data.bottomRight.y);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(img, data.topLeft.x, data.topLeft.y, img.width * widthRatio, img.height * widthRatio);

    ctx.restore();

    tick();
  };

  img.src = screenshotDir + '/' + layerType + '.png';
}

var tasks = [
  function() { drawLayer({ src: 'desktop.png' }); },
  function() { drawScreenshot({ layer: 'desktop' }); },
  function() { drawLayer({ src: 'tablet.png' }); },
  function() { drawScreenshot({ layer: 'tablet' }); },
  function() { drawLayer({ src: 'mobile.png' }); },
  function() { drawScreenshot({ layer: 'mobile' }); }
];

function tick() {
  var task = tasks.shift();

  if (task) {
    task();
  } else {
    console.info('Done!');
  }
}
