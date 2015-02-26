var easyimg = require('easyimage');
var webdriverio = require('webdriverio');

function takeScreenshot(url, screenshotsDir, layer, done) {

  layer.client = layer.client || { desiredCapabilities: {browserName: 'phantomjs'}};

  var client = webdriverio.remote(layer.client).init();

  if (layer.client.desiredCapabilities && layer.client.desiredCapabilities.chromeOptions && layer.client.desiredCapabilities.chromeOptions.mobileEmulation) {
    // Can't set dimensions when mobileEmulation is set
  } else {
    client.setViewportSize({
      width: layer.viewport.width,
      height: layer.viewport.height
    });
  }

  var output = screenshotsDir + '/' + layer.type + '.png';

  console.info('Now loading: layer '  + layer.type + '...');

  client.url(url)
    .pause(5000) // TODO: Find better way to ensure page is loaded
    .saveScreenshot(output, function () {
      console.info('Generated: ' + output);
      easyimg.crop({ // Because Chrome is rendering even whitespace around mobile emulator
        src: output, dst: output, x: 0, y: 0, gravity: 'NorthWest',
        cropwidth: layer.viewport.width, cropheight: layer.viewport.height
      });
      done();
      //client.end(); // Not sure about this
    });

}

function renderMockup(path, output, metadata) {

  var client = webdriverio.remote({
    desiredCapabilities: {browserName: 'phantomjs'}
  }).init();

  client.setViewportSize({
    width: metadata.mockup.width,
    height: metadata.mockup.height
  });

  client.url(path)
    .pause(1000)
    .saveScreenshot(output, function () {
      console.info('Saved responsive mockup to: ' + output);
      client.end(function () {
        console.info("Done");
      });
    });
}

function create(options) {
  ['output', 'template', 'url'].forEach(function(requiredOption) {
      if(!options[requiredOption]) throw(requiredOption + ' option missing');
  });

  var output = options.output;
  var template = options.template;
  var url = options.url;

  var metadata = require('./templates/' + template + '/metadata');
  var mockupPath = './templates/' + template + '/render.html';
  var screenshotsDir = './screenshots/' + template;
  var tasks = [];

  function next() {
    var task = tasks.shift();

    if (task) {
      task();
    } else {
      phantom.exit();
    }
  }

  metadata.layers.forEach(function(layer) {
    tasks.push(function() { takeScreenshot(url, screenshotsDir, layer, next); });
  });

  tasks.push(function() { renderMockup(mockupPath, output, metadata); });

  next();
}

module.exports = {
  create: create
};
