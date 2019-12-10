const stockData = require('./stock.json');
const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '914447',
  key: '5e8001e148347729a928',
  secret: '16bae03e27eeba0f1665',
  cluster: 'us2',
  encrypted: true
});

let i = 0;
setInterval(() => {
  // const NDAQ = stockData[0]['Trades'][i];
  const GOOG = stockData[1]['Trades'][i];
  pusher.trigger('trade', 'stock', GOOG);
  i++
}, 2000);
