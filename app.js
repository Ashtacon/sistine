const express = require('express');
const http = require('http');
const ejs = require('ejs');
const expressWs = require('express-ws');
const temperatureModule = require('./sensor/temperature');
const humidityModule = require('./sensor/humidity');
const relayModule = require('./sensor/relay');

const app = express();
const server = http.createServer(app);
expressWs(app, server);

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Initialize WebSocket server
app.ws('/', (ws, req) => {
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'WebSocket and MQTT Example',
    temperatureData: temperatureModule.getTemperatureData(),
    humidityData: humidityModule.getHumidityData(),
    relayData: relayModule.getRelayData(),
  });
});
