const createApp = require('../common/createApp');

const app = createApp();

app.get('/api/*', (req, res) => {
  res.json({
    success: true,
    errorCode: '200',
    errorMsg: '',
    fields: {
      response: 'Hi. This is Lazuli chat bot landing service.',
    },
  });
});

module.exports = app;
