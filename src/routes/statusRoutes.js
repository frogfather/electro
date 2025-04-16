import express from "express";

const router = express.Router();

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
  
  

export { router as statusRoutes };
