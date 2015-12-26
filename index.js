var Nightmare = require('nightmare');
var mkdirp = require('mkdirp');

function renderInNightmare(options, url, output, clipRect, done) {
  return Nightmare(options)
    .goto(url)
    .wait(500)
    .evaluate(function () {
      document.documentElement.style.overflow = 'hidden'; // hide scrollbars
    })
    .wait(100)
    .screenshot(output, clipRect)
    .end(function(err, result) {
      if (err) throw('Unable to render ' + url + ' to ' + output);
      console.info('Generated: ' + output);
      done();
    });
}

function takeScreenshot(url, screenshotsDir, layer, done) {
  var output    = screenshotsDir + '/' + layer.type + '.png';
  var options   = { width: layer.viewport.width, height: layer.viewport.height, overlayScrollbars: true };
  var clipRect  = { x: 0, y: 0, width: options.width, height: options.height };

  console.info('Now loading: layer '  + layer.type + '...');
  renderInNightmare(options, url, output, clipRect, done);
}

function renderMockup(path, output, metadata, done) {
  var url = 'file:///' + path;
  var options  = { width: metadata.mockup.width, height: metadata.mockup.height };
  var clipRect = { width: metadata.mockup.width, height: metadata.mockup.height, x: 0, y: 0 };

  console.info('Now loading: mockup...');
  renderInNightmare(options, url, output, clipRect, done);
}

function create(options) {
  ['output', 'template', 'url'].forEach(function(requiredOption) {
    if (!options[requiredOption]) throw(requiredOption + ' option missing');
  });

  var output = options.output;
  var template = options.template;
  var url = options.url;

  var metadata = require('./templates/' + template + '/metadata');
  var mockupPath = __dirname + '/templates/' + template + '/render.html';
  var screenshotsDir = __dirname + '/screenshots/' + template;
  var tasks = [];

  // assure the screenshots directory exists
  mkdirp.sync(screenshotsDir);

  function next() {
    var task = tasks.shift();

    if (task) {
      task();
    } else {
      console.info("DONE!");
    }
  }

  metadata.layers.forEach(function(layer, index) {
    var newUrl;
    if (Array.isArray(url)) {
      newUrl = url[index];
    } else {
      newUrl = url;
    }
    tasks.push(function() { takeScreenshot(newUrl, screenshotsDir, layer, next); });
  });

  tasks.push(function() { renderMockup(mockupPath, output, metadata, next); });

  next();
}

module.exports = {
  create: create
};
