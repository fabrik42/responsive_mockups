(function() {
  var metadata = {
    mockup: {
      width: 897,
      height: 468
    },
    layers: [
      {
        type: 'mobile1',
        topLeft: {
          x: 66,
          y: 122
        },
        bottomRight: {
          x: 199,
          y: 359
        },
        viewport: {
          width: 320,
          height: 568
        }
      },
      {
        type: 'mobile2',
        topLeft: {
          x: 243,
          y: 123
        },
        bottomRight: {
          x: 376,
          y: 360
        },
        viewport: {
          width: 320,
          height: 568
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
