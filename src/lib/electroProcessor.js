const POLL_INTERVAL = 120;

class ElectroProcessor {
    //active indicates that the heater is on
    constructor () {
        this.active = true;
        this.indicatorActive = false;
        this.ticks = 0;
        this.pollInterval = POLL_INTERVAL;
    };

    //On each tick we want to blink the indicator lamp
    //and if the tick count is >= the poll interval
    run () {
      this.indicatator();
      this.ticks += 1;
      if (this.ticks >= POLL_INTERVAL) {
        this.ticks = 0;
        this.readTemps();
      }
      
    };

    setPollInterval (interval) {
        console.log(`set poll interval ${interval}`);
        if (interval && typeof interval === "number") {
            this.pollInterval = interval;
        } 
    };

    getPollInterval () {
        return this.pollInterval;
    }

    readTemps () {
        console.log('Read temps called');
    }

    indicatator () {
        this.indicatorActive = this.active === true ? true : !this.indicatorActive;
        //set the indicator pin to the chosen value if it is not already
    }

};

export default ElectroProcessor;