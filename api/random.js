/* © 2019 int3ractive.com
 * @author Thanh Tran
 */
const createApp = require('../common/createApp');
const { getRandomItem } = require('../common/utils');

const app = createApp();

app.post('/api/*', (req, res) => {
  const optionsText = req.body.options;
  console.log(req.body);

  if (!optionsText) {
    return res.json({
      success: true,
      errorCode: '200',
      errorMsg: '',
      fields: {
        result: 'Sorry, no option to choose.',
      },
    });
  }

  const options = optionsText.split(',');
  const result = getRandomItem(options);

  console.log('random result', result);

  res.json({
    success: true,
    errorCode: '200',
    errorMsg: '',
    fields: {
      result: result.replace(/[?:]/g, ''),
    },
  });
});

module.exports = app;
