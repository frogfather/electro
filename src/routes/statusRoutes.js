import express from "express";
import * as OnOff from 'onoff';

const Gpio = OnOff.Gpio;
const router = express.Router();
// const output2 = new Gpio(573,'out');
let interval

router.get("/", (req,res) => {
  console.log('get base route');
    res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Electro App</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              background-color: #f4f4f9;
              color: #333;
              text-align: center;
            }
            h1 {
              font-size: 3rem;
              align-items: center;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div>
            <h1>🎉</h1>
            <h1>Server is Running</h1>
            <p>API is available and serving requests.</p>
          </div>
        </body>
    </html>
    `)
});
router.get("/pins/2/start",(req,res) => {
    interval = setInterval(toggle,3000);
    res.status(200).json({
        status: "started"
      })
  });

router.get("/pins/2/stop",(req,res) => {
    endToggle();
    res.status(200).json({
        status: "stopped"
      })
  })
  
  const toggle = () => {
    // if (output2.readSync() === 0) {
    //   console.log('switch on');
    //     output2.writeSync(1);
    //   } else {
    //     console.log('switch off');
    //     output2.writeSync(0);
    //   }
    };
  
  const endToggle = () => {
      clearInterval(interval);
      output2.writeSync(0);
      output2.unexport();
  }

export { router as statusRoutes };
