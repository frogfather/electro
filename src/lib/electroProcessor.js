import * as OnOff from 'onoff';
import fs from 'fs';

const Gpio = OnOff.Gpio;
const POLL_INTERVAL = 20;
const FLASH_INTERVAL = 4;
const LOW_TEMP_SENSOR = '';
const AMBIENT_SENSOR = '';
const HIGH_TEMP_SENSOR = '';

class ElectroProcessor {
    constructor () {
        this.ticks = 0;
        this.pollInterval = POLL_INTERVAL;
        this.setup();
    };

    //temp sensor is GPIO4 Pin 7 - no read necessary
    //Relay: Output GPIO2 Pin 3 (573) - this works - remember 1 = off!
    //Indicator Output GPIO3 Pin 5 (574) - this works
    //Sense Input GPIO5 Pin 29 (576) - works but is 1 when rla open
    
    setup () {
        // this.heaterOutput = new Gpio(573,'out');
        // this.indicatorOutput = new Gpio(574,'out');
        // this.senseInput = new Gpio(576,'in');
        // this.sensors = [LOW_TEMP_SENSOR, AMBIENT_SENSOR, HIGH_TEMP_SENSOR];
    }
    
    run () {
      this.setIndicatator();
      this.ticks += 1;
      if (this.ticks >= POLL_INTERVAL) {
        this.ticks = 0;
        this.readTemps();
      }
      
    };    

    //If the heater is active toggle every second tick
    //otherwise set high every fourth tick
    setIndicatator () {
        // const heaterActive = this.isActive();
        // const indicatorState = this.indicatorOutput.readSync();
        // if (heaterActive && (this.ticks % 2 === 0)) {
        //     this.indicatorOutput.writeSync(indicatorState === 0 ? 1 : 0);
        // } else if (!heaterActive && this.ticks % 4 === 0) {
        //     this.indicatorOutput.writeSync(1);
        // } else {
        //     this.indicatorOutput.writeSync(0);
        // }
    }

    readTemps () {
        // this.sensors.forEach(sensor => {
        //     const pathToSensor = `/sys/bus/w1/devices/${sensor}/w1_slave`;
        //     if (fs.existsSync(pathToSensor)) {
        //         fs.readFile(pathToSensor,(err, buffer) => {
        //             if (err){
        //                 console.error(err);
        //                 process.exit(1);
        //             }
        //             var data = buffer.toString('ascii').split(" ");
        //             var temp  = parseFloat(data[data.length-1].split("=")[1])/1000.0;
        //             temp = Math.round(temp * 10) / 10;
        //             var data = {
        //                 temperature_record:[
        //                     {
        //                         sensor_id: LOW_TEMP_SENSOR,
        //                         timestamp: Date.now(),
        //                         temperature: temp
        //                     }
        //                 ]
        //             };
        //         //save to database
        //         });    
        //     } else {
        //         console.log(`Path ${pathToSensor} does not exist`);
        //     }
            
        // });
    };
    
    //sets the heater output to the opposite of the value
    setHeaterActive (value) {
        this.heaterOutput.writeSync(value === true ? 0 : 1);
    }
    
    //Returns true if the sense input is 0
    isActive () {
        const senseInputState = this.senseInput.readSync();
        return senseInputState === 0;
    }
    
    
    setPollInterval (interval) {
        if (interval && typeof interval === "number") {
            this.pollInterval = interval;
        } 
    };

    getPollInterval () {
        return this.pollInterval;
    }

};

export default ElectroProcessor;
