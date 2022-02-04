const common = require("./common");

var mockInterval = null;
var mockData = null;

var arduino = null;

exports.init = () => {
  if (config.arduinoAvailable) {
    var SerialPort = require("serialport");
    const Readline = require("@serialport/parser-readline");
    const parser = new Readline();

    arduino = new SerialPort(
      config.arduinoPath,
      {
        baudRate: 9600,
        parser,
      },
      function (err) {
        if (err) {
          console.log("Arduino error: ", err.message);
        } else {
          console.log("Connected to Arduino at ", config.arduinoPath);
          setTimeout(() => {
            // sen config values to arduino
            //exports.sendStartupValuesToArduino(arduino);
          }, 2000);
        }
      }
    );

    arduino.pipe(parser);

    parser.on("data", function (data) {
      //console.log("incoming data from arduino1: " + data);
      arduino_data = data.trim();
      extractArduinoData(arduino_data);
    });
  } else {
    console.log("No arduino available");
    arduino = {
      write: (s) => {},
    };
  }
};



/**
 * Send a specific message & value to a specific arduino
 */
exports.sendBoardToArduino = (name, id, padding = 0) => {

  values = board.join('');
  console.log(values);
  arduino.write("<SB" + values + ">");
};

/**
 * Sends data to both arduinos over serial connection
 */
exports.sendToArduino = (data) => {
  console.log("sending to arduino:", data)
  arduino.write(data);
};

extractArduinoData = (data) => {
  let source = null;
  const arduinoData = {};

  

  if (data.startsWith("[[") && data.endsWith("]]")) {
   

    const locationString = data.substring(2, data.length - 2);
    const locations = locationString.split(";");
    console.log (locations)
    for (i = 0; i < locations.length; i++) {
      
    }

  } else {
    console.log(data);
  }
};
