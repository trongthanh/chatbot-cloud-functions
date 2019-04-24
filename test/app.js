/* © 2019 int3ractive.com
 * @author Thanh Tran
 *
 * Express wrapper to test endpoints locally
 */
const path = require('path');

const PORT = process.env.PORT || 3000;

// test single app endpoint here

// const app = require('../api/default');
const app = require('../api/weather');

// define mock json path here
app.use('/mock/weather.json/:lat,:lng', (req, res) => {
  res.json(require('../mock/weather.json'));
});

// error handler
app.use((err, req, res, next) => {
  console.log('err', err);
  if (err) {
    // render the error page
    res.status(err.status || 500);
    res.end(`<h2>SERVER ERROR</h2><p>${err.message}`);
  }
});

// start server
const server = app.listen(PORT, (err) => {
  if (err) {
    return reject(err);
  }
  console.log('App started and listening on port', PORT);
});
