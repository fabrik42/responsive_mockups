(function() {
  var metadata = {
    mockup: {
      width: 1200,
      height: 1024
    },
    layers: [
      {
        type: 'mobile',
        topLeft: {
          x: 711,
          y: 562
        },
        bottomRight: {
          x: 844,
          y: 790
        },
        viewport: {
          width: 320,
          height: 568
        }
      },
      {
        type: 'tablet',
        topLeft: {
          x: 789,
          y: 373
        },
        bottomRight: {
          x: 1109,
          y: 789
        },
        viewport: {
          width: 768,
          height: 1024
        }
      },
      {
        type: 'desktop',
        topLeft: {
          x: 170,
          y: 257
        },
        bottomRight: {
          x: 1029,
          y: 761
        },
        viewport: {
          width: 1280,
          height: 1024
        }
      }
    ]
  };

  if (typeof module != 'undefined') {
    module.exports = metadata;
  } else {
    window.metadata = metadata;
  }
})();
