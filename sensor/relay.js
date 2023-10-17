// relay.js
const mqtt = require('mqtt');

const mqttBroker = 'mqtt://broker.emqx.io';
const mqttClientId = 'mqtt-client-' + Math.random().toString(16).substr(2, 8);

const client = mqtt.connect(mqttBroker, {
  clientId: mqttClientId
});

const relayData = []; // Store relay data

client.on('connect', () => {
  console.log('Connected to MQTT Broker');
  client.subscribe('emqx/relay', (err) => {
    if (!err) {
      console.log('Subscribed to topic: emqx/relay');
    } else {
      console.error('Error subscribing to topic: emqx/relay', err);
    }
  });
});

client.on('message', (topic, message) => {
  if (topic === 'emqx/relay') {
    const data = {
      topic: topic,
      message: message.toString()
    };
    relayData.push(data);

    if (relayData.length > 10) {
      relayData.shift();
    }
  }
});

module.exports = {
  getClient: () => client,
  getRelayData: () => relayData,
};
