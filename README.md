# Responsive Mockups via PhantomJS 2.0

Small PhantomJS based script that allows you to automatically create mockup graphics, providing only a URL.

```javascript
mockup.create({
  url: 'http://example.org',
  template: 'flat_responsive', // available: 'flat_responsive', 'flat_responsive_2'
  output: 'responsive_mockup.png'
});
```

Example output for `url: 'https://flinc.org'`

![mockup 1](https://i.imgur.com/IUEHBcI.png)
![mockup 2](https://i.imgur.com/kolyLwL.png)

## How To

* Clone this repo
* Edit `example.js` to choose mockup template and target url
* Call `phantomjs example.js`

## Requirements

The only external requirement is PhantomJS in version >= 2.0.0.

`brew install phantomjs`

Double check the version of PhantomJS

`phantomjs -v`

## Credits for provided mockup templates

At the moment this script includes two mockup templates of pixeden.com:

* http://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd
* http://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd-vol2

The awesome people at pixeden.com gave me permission to even include the PSD files so you can tweak the mockups to fit your needs. :heart:

## How can I customize the templates

For now, mockups are based on two files: a PSD that's the graphical template and a metadata js file that contains information which resolutions to take for the screenshots and where to place them in the mockup. Based on the PSD, there are also exported "layers" that will be used to render the mockup.

Just have a look at the templates in the `/templates` folder, the information in the `metadata.js` file will map to the pixel coordinates in the PSD. 

If you move or scale a device in the PSD template, you have to update the pixel coordinates in the `metadata.js` file and you will have to export the layers (mobile.png, tablet.png, desktop.png) again.

Additionally, keep in mind that the resulting image is just another screenshot of a html page with a canvas tag.
This minimal html file is called `render.html` and is also contained in every template folder. So you can not only affect the appearance by modifying the PSD, you can also customize the `render.html` page, e.g. by HTML, CSS or even additional stuff you draw on the canvas with JS.
