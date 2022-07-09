const fs = require('fs');
fs.readFile('./www/index.html', 'utf8', (err, data) => {
  if (err) {
    console.log(`Postbuild Cordova failed: ${err}`);
  } else {
    const mode = process.argv.slice(2)[0];
    const path = mode === 'dev' ? 'http://localhost:3000/': './';
    console.log('postbuild mode ', mode);
    data = data.replace('/index.js', path+ 'index.js');
  }
  fs.writeFile('./www/index.html', data, 'utf8', (err) => {
    if (err) {
      console.log(`Postbuild Cordova failed: ${err}`);
    } else {
      console.log(`Postbuild Cordova applied`);
    }
  });
});
