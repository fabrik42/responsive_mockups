var webpage = require('webpage');

function takeScreenshot(url, screenshotsDir, layer, done) {
  var page = webpage.create();

  var output = screenshotsDir + '/' + layer.type + '.png';

  page.viewportSize = { width: layer.viewport.width, height: layer.viewport.height };
  page.clipRect = { top: 0, left: 0, width: page.viewportSize.width, height: page.viewportSize.height };

  console.info('Now loading: layer '  + layer.type + '...');

  page.open(url, function(status) {
    if (status !== 'success') console.error('Unable to load the address for layer ' + layer.type);

    window.setTimeout(function() {
      console.info('Generated: ' + output);
      page.render(output);
      done();
    }, 1000);

  });
}

function renderMockup(path, output, metadata) {
  var page = webpage.create();

  page.viewportSize = {
    width: metadata.mockup.width,
    height: metadata.mockup.height
  };

  page.clipRect = {
    top: 0,
    left: 0,
    width: metadata.mockup.width,
    height: metadata.mockup.height
  };

  page.open(path, function(status) {
    if (status !== 'success') console.error('Unable to load mockup!');

    page.onConsoleMessage = function(msg) {
      console.warn('[render] ' + msg);
    };

    window.setTimeout(function() {
      console.info('Saved responsive mockup to: ' + output);
      page.render(output);
      phantom.exit();
    }, 500);

  });
}

function create(options) {
  ['output', 'template', 'url'].forEach(function(requiredOption) {
      if (!options[requiredOption]) throw(requiredOption + ' option missing');
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

  metadata.layers.forEach(function(layer, index) {
    var newUrl;
    if (Array.isArray(url)) {
      newUrl = url[index];
    } else {
      newUrl = url;
    }
    tasks.push(function() { takeScreenshot(newUrl, screenshotsDir, layer, next); });
  });

  tasks.push(function() { renderMockup(mockupPath, output, metadata); });

  next();
}

module.exports = {
  create: create
};
