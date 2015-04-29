(function() {
  var metadata = {
    mockup: {
      width: 1140,
      height: 480,
      name: 'mobile_multiple'
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
      },
      {
        type: 'mobile3',
        topLeft: {
          x: 416,
          y: 122
        },
        bottomRight: {
          x: 549,
          y: 359
        },
        viewport: {
          width: 320,
          height: 568
        }
      },
      {
        type: 'mobile4',
        topLeft: {
          x: 591,
          y: 122
        },
        bottomRight: {
          x: 724,
          y: 359
        },
        viewport: {
          width: 320,
          height: 568
        }
      },
      {
        type: 'mobile5',
        topLeft: {
          x: 766,
          y: 122
        },
        bottomRight: {
          x: 899,
          y: 359
        },
        viewport: {
          width: 320,
          height: 568
        }
      },
      {
        type: 'mobile6',
        topLeft: {
          x: 941,
          y: 122
        },
        bottomRight: {
          x: 1074,
          y: 359
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
