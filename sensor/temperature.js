// temperature.js
const mqtt = require('mqtt');

const mqttBroker = 'mqtt://broker.emqx.io';
const mqttClientId = 'mqtt-client-' + Math.random().toString(16).substr(2, 8);

const client = mqtt.connect(mqttBroker, {
  clientId: mqttClientId
});

const temperatureData = []; // Store temperature data

client.on('connect', () => {
  console.log('Connected to MQTT Broker');
  client.subscribe('emqx/temps', (err) => {
    if (!err) {
      console.log('Subscribed to topic: emqx/temps');
    } else {
      console.error('Error subscribing to topic: emqx/temps', err);
    }
  });
});

client.on('message', (topic, message) => {
  if (topic === 'emqx/temps') {
    const data = {
      topic: topic,
      message: message.toString()
    };
    temperatureData.push(data);

    if (temperatureData.length > 10) {
      temperatureData.shift();
    }
  }
});

module.exports = {
  getClient: () => client,
  getTemperatureData: () => temperatureData,
};
