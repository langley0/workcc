const WebSocket = require('ws');

const UUID = "3413a9b6-8ee9-11e8-9eb6-529269fb1459"

const ws = new WebSocket('wss://api.upbit.com/websocket/v1');
ws.on('open', function open() {
    const initMsg = [{"ticket":UUID},{"format":"SIMPLE"},{"type":"trade","codes":["KRW-BTC"]},{"format":"SIMPLE"}];
    ws.send(JSON.stringify(initMsg));
  });

  ws.on('message', function incoming(data) {
    JSON.parse(data.toString());
  });