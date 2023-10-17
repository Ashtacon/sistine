// humidity.js
const mqtt = require('mqtt');

const mqttBroker = 'mqtt://broker.emqx.io';
const mqttClientId = 'mqtt-client-' + Math.random().toString(16).substr(2, 8);

const client = mqtt.connect(mqttBroker, {
  clientId: mqttClientId
});

const humidityData = []; // Store humidity data

client.on('connect', () => {
  console.log('Connected to MQTT Broker');
  client.subscribe('emqx/hums', (err) => {
    if (!err) {
      console.log('Subscribed to topic: emqx/hums');
    } else {
      console.error('Error subscribing to topic: emqx/hums', err);
    }
  });
});

client.on('message', (topic, message) => {
  if (topic === 'emqx/hums') {
    const data = {
      topic: topic,
      message: message.toString()
    };
    humidityData.push(data);

    if (humidityData.length > 10) {
      humidityData.shift();
    }
  }
});

module.exports = {
  getClient: () => client,
  getHumidityData: () => humidityData,
};
