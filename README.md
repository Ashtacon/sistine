# Simple MQTT Dashboard

![Project Banner](https://res.cloudinary.com/practicaldev/image/fetch/s--nLHy8W7u--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v6ahv1rptg4t1zhbn2of.png)

A MQTT Dashboard project created using Node.js, MQTT.js, Express.js, and EJS.

## Introduction
SISTINE stands for 

- SI mple
- S ystem
- T o
- I nteracting from mqtt In broker-mqtt with
- N ode.js and
- E xpress.js

and of course Sistine is the name of one of my waifu ^^

This MQTT Dashboard is designed to help you visualize and control MQTT-connected devices easily. With this dashboard, you can monitor and manage your IoT devices in real-time.

## Prerequisites

Before getting started, ensure you have the following:

- ESP32 or Arduino connected to an MQTT broker (for example, [Wokwi](https://wokwi.com/projects/378161879391277057)).
- MQTT Broker configuration:

```cpp
// MQTT Broker
const char* mqtt_server = "broker.emqx.io";
const int mqtt_port = 1883;
const char* mqtt_username = "emqx";
const char* mqtt_password = "public";
```

you can use my wokwi for testing

```
https://wokwi.com/projects/378161879391277057
```


## usage

- Run the Wokwi project.
- Clone this repository and change your directory:

```bash
git clone https://github.com/Ashtacon/sistine.git
cd sistine
```

- Install the necessary libraries:

```bash
npm install mqtt express express-ws ejs
```

- Start the dashboard:
```bash
npm run dev
```

If the data hasn't been sent to your dashboard, refresh it.
## Features

- Real-time data updates.
- Interactive controls for your MQTT-connected devices.
## Acknowledgements

 - [Node.js](https://nodejs.org/id)
 - [MQTT.js](https://github.com/mqttjs)
 - [Express.js](https://expressjs.com/)
 - [EJS](https://ejs.co/)
 - [Wokwi](https://wokwi.com)


## Support

Don't forget to star this project if you find it useful!

