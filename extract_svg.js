const fs = require('fs');

function extract(filePath, outPath) {
    let content = fs.readFileSync(filePath, 'utf8');
    // We can evaluate the React output or just fetch the raw SVG.
    // It's easier to find a raw SVG collection on GitHub.
}
