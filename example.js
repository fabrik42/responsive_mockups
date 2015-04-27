var mockup = require('./index');

mockup.create({
  url: ['https://flinc.org', 'https://flinc.org/drivers'],
  template: 'mobile_multiple', // available: 'flat_responsive', 'flat_responsive_2'
  output: 'responsive_mockup.png'
});
