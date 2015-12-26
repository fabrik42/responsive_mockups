# Responsive Mockups via PhantomJS 2.0

Small Nightmare.js/Electron based script that allows you to automatically create mockup graphics, providing only a URL.

![mockup 1](https://i.imgur.com/IUEHBcI.png)
![mockup 2](https://i.imgur.com/kolyLwL.png)
![mockup 3](http://i.imgur.com/zCH6z9q.png)

## How To

* Make sure you have a current node version installed
* Clone this repo
* `npm install` all dependencies
* Edit `example.js` to choose mockup template and target url
* Call `node example.js` (for an example with a single URL)
* Or call `node example-mobile-multiple.js` (for an example with multiple URLs)

## Credits for provided mockup templates

At the moment this script includes two mockup templates of pixeden.com:

* http://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd
* http://www.pixeden.com/psd-web-elements/flat-responsive-showcase-psd-vol2

The awesome people at pixeden.com gave me permission to even include the PSD files so you can tweak the mockups to fit your needs. :heart:

## How can I customize the templates?

For now, mockups are based on two files: a PSD (that's the graphical template) and a `metadata.js` JavaScript file that contains information which resolutions to take for the screenshots and where to place them in the mockup. Based on the PSD, there are also exported "layers" that will be used to render the mockup.

Just have a look at the templates in the `/templates` folder, the information in the `metadata.js` file will map to the pixel coordinates in the PSD.

If you move or scale a device in the PSD template, you have to update the pixel coordinates in the `metadata.js` file and you will have to export the layers (mobile.png, tablet.png, desktop.png) again.

Additionally, keep in mind that the resulting image is just another screenshot of a html page with a canvas tag.
This minimal html file is called `render.html` and is also contained in every template folder. So you can not only affect the appearance by modifying the PSD, you can also customize the `render.html` page, e.g. by HTML, CSS or even additional stuff you draw on the canvas with JS.
