var mockup = require('./index');

mockup.create({
  url: [
    'https://flinc.org', 
    'https://flinc.org/drivers', 
    'https://flinc.org/passengers', 
    'https://flinc.org/corporate', 
    'https://flinc.org/developers',
    'https://support.flinc.org/hc/en-us/categories/200236098-FAQ'
  ],
  template: 'mobile_multiple', // available: 'flat_responsive', 'flat_responsive_2'
  output: 'responsive_mockup.png'
});
