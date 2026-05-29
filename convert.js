const fs = require('fs');

function convert(filepath, destpath, color) {
    if (!fs.existsSync(filepath)) {
        console.log("File not found", filepath);
        return;
    }
    let content = fs.readFileSync(filepath, 'utf8');
    // Using a more robust regex that ignores spacing
    let match = content.match(/=>\s*\(([\s\S]*?)\);\n*export default/);
    if (!match) {
        console.log("No match", filepath);
        return;
    }

    let reactCode = match[1];
    let mockReact = `
        const React = {
            createElement: (tag, props, ...children) => {
                if (tag === 'svg') {
                    delete props.style;
                }
                let attrs = Object.keys(props || {}).filter(k => k !== 'style').map(k => {
                    let prop = k;
                    if (k === 'viewBox') prop = 'viewBox';
                    else if (k === 'xmlnsXlink') prop = 'xmlns:xlink';
                    else if (k === 'className') prop = 'class';
                    else prop = k.replace(/([A-Z])/g, '-$1').toLowerCase();
                    return \`\${prop}="\${props[k]}"\`;
                }).join(' ');
                let childHTML = children.map(c => typeof c === 'string' ? c : (c?c.html:'')).join('');
                if (['path', 'circle', 'rect', 'ellipse', 'line', 'polyline', 'polygon'].includes(tag) && !childHTML) {
                    return { html: \`<\${tag} \${attrs} />\` };
                }
                return { html: \`<\${tag} \${attrs}>\${childHTML}</\${tag}>\` };
            }
        };
        const color = "${color}";
        const size = "100%";
        const style = {};
        const result = ${reactCode};
        result.html
    `;

    try {
        let output = eval(mockReact);
        fs.writeFileSync(destpath, output);
        console.log("Written", destpath);
    } catch(e) {
        console.error("Error for", filepath, e);
    }
}

convert('node_modules/undraw-react/dist/esm/illustrations/TravelBooking.js', 'undraw_svgs/booking.svg', '#0055ff');
convert('node_modules/undraw-react/dist/esm/illustrations/Welcome.js', 'undraw_svgs/welcome.svg', '#0055ff');
