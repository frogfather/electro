import ElectroProcessor  from "../lib/electroProcessor.js";

const INTERVAL_MILLISECONDS = 500;
class ElectroTimer {

    constructor () {
        this.timeoutObj = undefined;
        this.counter = 0;
        this.running = true;
        this.interval = INTERVAL_MILLISECONDS;
        this.electroProcessor = new ElectroProcessor();
    };

    run = () => {
        this.timeoutObj = setInterval(async ()  => this.electroProcessor.run(), INTERVAL_MILLISECONDS);
        this.running = true;
    };

    start = (options) => {
        if (this.running === true) {
            console.log(`Timer is already running`);
        }
        this.setOptions(options);
        console.log(`starting electro timer`);
        this.run();
        return this.getTimerStatus();
    };

    stop = () => {
        if (!this.timeoutObj) {
          console.log(`No timeout object found. Timer is probably stopped already`);
          return;
        }
        const id = this.timeoutObj[Symbol.toPrimitive]();
        console.log("stopping electro timer");
        clearInterval(id);
        this.running = false;
    }

    getPollInterval = () => {
        return this.electroProcessor.getPollInterval();
    }
    
    getTimerStatus = () => {
      return {
          running: this.running,
          mainInterval: this.interval,
          pollInterval: this.getPollInterval()
      }
    }

    setTimerStatus = (options) => {
       this.setOptions(options);
    }

    setOptions = (options) => {
        if (options.interval && typeof options.interval === "number") {
            this.interval = options.interval;
        }
        if (options.pollInterval && typeof options.pollInterval === "number") {
            this.electroProcessor.setPollInterval(options.pollInterval);
        }
    }
    
};

export default ElectroTimer;
