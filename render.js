const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><div id="root"></div>`);
global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;

const React = require('react');
const ReactDOMServer = require('react-dom/server');

async function run() {
    const TravelBooking = (await import('undraw-react/dist/esm/illustrations/TravelBooking.js')).default;
    const Welcome = (await import('undraw-react/dist/esm/illustrations/Welcome.js')).default;

    // Use primary color #0F172A (Deep Blue) or #0055ff as per request. The prompt asks for:
    // "Цвет элементов в иллюстрациях должен быть синим (#0055ff или похожим)"
    const bookingSvg = ReactDOMServer.renderToStaticMarkup(React.createElement(TravelBooking, { color: '#0055ff' }));
    const welcomeSvg = ReactDOMServer.renderToStaticMarkup(React.createElement(Welcome, { color: '#0055ff' }));

    fs.writeFileSync('undraw_svgs/booking.svg', bookingSvg);
    fs.writeFileSync('undraw_svgs/welcome.svg', welcomeSvg);
    console.log("Done");
}
run();
