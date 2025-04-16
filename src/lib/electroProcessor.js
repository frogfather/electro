import * as OnOff from 'onoff';

const Gpio = OnOff.Gpio;
const POLL_INTERVAL = 20;
const FLASH_INTERVAL = 4;

class ElectroProcessor {
    constructor () {
        this.ticks = 0;
        this.indicatorCount = 0;
        this.pollInterval = POLL_INTERVAL;
        this.setup();
    };

    //temp sensor is GPIO4 Pin 7 - no read necessary
    //Relay: Output GPIO2 Pin 3 (573) - this works - remember 1 = off!
    //Indicator Output GPIO3 Pin 5 (574) - this works
    //Sense Input GPIO5 Pin 29 (576) - works but is 1 when rla open
    
    setup () {
        this.heaterOutput = new Gpio(573,'out');
        this.indicatorOutput = new Gpio(574,'out');
        this.senseInput = new Gpio(576,'in');
    }
    
    run () {
      const heaterActive = this.isActive();
      const indicatorState = this.indicatorOutput.readSync();
      console.log("Heater active ",heaterActive);
      console.log("Indicator state ",indicatorState,this.indicatorCount);
      if (heaterActive && (this.indicatorCount % 2 === 0)) {
            this.indicatorOutput.writeSync(indicatorState === 0 ? 1 : 0);
        } else if (!heaterActive && this.indicatorCount === 1) {
            this.indicatorOutput.writeSync(1);
        } else {
            this.indicatorOutput.writeSync(0);
        }
      //this.setIndicatator();
      this.ticks += 1;
      this.indicatorCount += 1;
      if (this.indicatorCount === 4) {
            this.indicatorCount = 0;
        }
      if (this.ticks >= POLL_INTERVAL) {
        this.ticks = 0;
        this.readTemps();
        
      }
      
    };    

    setIndicatator () {
        //if the sense input is high (open) blink 1/4
        //if it's low blink 2/4
        const currentState = this.indicatorOutput.readSync();
        console.log("current indicator state", currentState);
    }
    
    readTemps () {
        console.log("read temp");
        //look in the relevant location for the data
    }
    
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
