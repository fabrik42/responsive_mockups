(function() {
  var metadata = {
    mockup: {
      width: 1200,
      height: 1024
    },
    layers: [
      {
        type: 'mobile',
        client: {
          host: "localhost",
          port: 9515,
          desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
              mobileEmulation: {
                deviceName: 'Apple iPhone 5'
              }
            }
          }
        },
        topLeft: {
          x: 445,
          y: 599
        },
        bottomRight: {
          x: 581,
          y: 828
        },
        viewport: {
          width: 320,
          height: 568
        }
      },
      {
        type: 'tablet',
        client: {
          host: "localhost",
          port: 9515,
          desiredCapabilities: { browserName: 'chrome' }
        },
        topLeft: {
          x: 158,
          y: 407
        },
        bottomRight: {
          x: 483,
          y: 826
        },
        viewport: {
          width: 768,
          height: 1024
        }
      },
      {
        type: 'desktop',
        client: {
          host: "localhost",
          port: 9515,
          desiredCapabilities: { browserName: 'chrome' }
        },
        topLeft: {
          x: 238,
          y: 222
        },
        bottomRight: {
          x: 1058,
          y: 654
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
