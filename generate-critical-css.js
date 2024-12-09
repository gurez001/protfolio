const critical = require('critical');
const fs = require('fs');
const path = require('path');

async function generateCriticalCSS() {
  try {
    const result = await critical.generate({
      base: 'out/',
      src: 'index.html',
      target: {
        css: 'critical.css',
        html: 'index-critical.html',
        uncritical: 'uncritical.css',
      },
      width: 1300,
      height: 900,
    });

    console.log('Critical CSS generated successfully');
  } catch (error) {
    console.error('Error generating critical CSS:', error);
  }
}

generateCriticalCSS();

