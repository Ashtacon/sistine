
# MQTT-Dashboard
### I Created MQTT-dashboard using nodejs mqtt.js expressjs and ejs




## To run this project

### connect your esp32 or arduino in wokwi to broker 

```bash
  // MQTT Broker
  const char* mqtt_server = "broker.emqx.io";
  const int mqtt_port = 1883;
  const char* mqtt_username = "emqx";
  const char* mqtt_password = "public";
```

#### if u use my dashboard just use the mqtt broker server

```bash
  // only use this server
  const char* mqtt_server = "broker.emqx.io";
```

### for example u can use my wokwi projects

```bash
  https://wokwi.com/projects/378161879391277057
```

### run the wokwi first

### clone my repository and change your directory

```bash
  git clone https://github.com/Ashtacon/sistine.git
  cd sistine
```

### install the library first

```bash
  npm install mqtt express express-ws ejs
```

#### and run it
```bash
  npm run dev
```

#### if the data havent send to your dashboard, refresh it ^^

## thanks dont forget the star

