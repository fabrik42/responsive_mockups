var mockup = require('./index');

mockup.create({
  url: [
    'https://flinc.org/drivers',
    'https://flinc.org',
    'https://flinc.org/passengers',
    'https://flinc.org/corporate',
    'https://flinc.org/users/sign_up',
    'https://flinc.org/users/sign_in'
  ],
  template: 'mobile_multiple', // available: 'flat_responsive', 'flat_responsive_2'
  output: 'responsive_mockup.png'
});
