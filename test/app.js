/* © 2019 int3ractive.com
 * @author Thanh Tran
 *
 * Express wrapper to test endpoints locally
 */
const PORT = process.env.PORT || 3000;

// test app endpoint here, only one at a time
// const app = require('../api/default');
// const app = require('../api/weather');
// const app = require('../api/aqi');
// const app = require('../api/random');
// const app = require('../api/giphy');
const app = require('../api/ama');

// define mock json path here
app.use('/mock/weather.json/:lat,:lng', (req, res) => {
  res.json(require('../mock/weather.json'));
});

app.use('/mock/aqi.json', (req, res) => {
  res.json(require('../mock/aqi.json'));
});

app.use('/mock/giphy.json', (req, res) => {
  res.json(require('../mock/giphy.json'));
});

// error handler
app.use((err, req, res) => {
  console.log('err', err);
  if (err) {
    // render the error page
    res.status(err.status || 500);
    res.end(`<h2>SERVER ERROR</h2><p>${err.message}`);
  }
});

// start server
app.listen(PORT, (err) => {
  if (err) {
    return err;
  }

  console.log('App started and listening on port', PORT);
});
