///////////////////////////////////
// Connect to a knx network
// author: stanle321@gmail.com
///////////////////////////////////

// Some imports

// import KNX lib
var knx = require('knx');

// import readline lib
const readline = require('readline');

// Prensa : '192.168.8.254'
// Comidas: '192.168.2.40'
// Auditorio: '192.168.6.254'
// Some globals
const ipAddr = '192.168.4.214';
const ipPort = 3671;
const logLevel = 'trace';               // This can be 'error', 'warn', 'info' (default), 'debug', or 'trace'.
const groupAddDevice = "3/0/3"          // Device as a group direction

// create connetion to address
var connection = knx.Connection({
    // ip address and port of the KNX router or interface
    ipAddr: ipAddr, 
    ipPort: ipPort,
    logLevel: logLevel,
    handlers: {
        connected: function() {
            console.log('Connected!');
            console.log('Hurray, I can talk KNX!');
        },
        event: function (evt, src, dest, value) {
        console.log("%s **** KNX EVENT: %j, src: %j, dest: %j, value: %j",
            new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
            evt, src, dest, value);
        },
        // get notified on connection errors
        error: function(connstatus) {
                console.log("**** ERROR: %j", connstatus);
            }
    }
})
// Create light object
//var light = new knx.Devices.BinarySwitch({ga: '1/1/11', status_ga: '2/1/0'}, connection);


function turnOn() {
    console.log('Turnning ON: ', groupAddDevice)
    connection.write(groupAddDevice, 1);
}

function turnOff() {
    console.log('Turnning OFF:', groupAddDevice)
    connection.write(groupAddDevice, 0)
}

function testFunction() {
    console.log('hey i am here')
}


// Grab User inputs from keyboard
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.name==='q'){
        process.exit()
    }else if (key.name ==='1') {
        console.log('pressed 1')
        turnOn()
    }else if (key.name ==='2'){
        console.log('pressed 2')
        turnOff()
    }else if (key.name==='3'){
        testFunction()
    }
});

console.log('Press q for exit')
console.log('Press 1 for Turn ON')
console.log('Press 2 for Turn OFF')
