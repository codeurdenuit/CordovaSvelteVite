const fs = require('fs');
fs.readFile('./www/index.html', 'utf8', (err, data) => {
  if (err) {
    console.log(`Fix Cordova failed: ${err}`);
  } else {
    data = data.replace('/index.js', './index.js');
  }
  fs.writeFile('./www/index.html', data, 'utf8', (err) => {
    if (err) {
      console.log(`Fix Cordova failed: ${err}`);
    } else {
      console.log(`Fix Cordova applied`);
    }
  });
});
