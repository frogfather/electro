import "dotenv/config";
import express from "express";
// import morgan from "morgan";
// import cors from "cors";
// import rateLimit from "express-rate-limit";
// import sslRedirect from "heroku-ssl-redirect";
import https from "https";
import fs from "fs";
import { statusRoutes } from "../src/routes/statusRoutes.js";

const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();
// app.set("trust proxy", true);
// app.set('trust proxy', 1 /* number of proxies between user and server */) //This is for local testing only

// app.use(
//   cors({
//     origin: [
//       process.env.CORS_ORIGIN,
//       "http://localhost:3001",
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   })
// );

// app.options("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.sendStatus(204);
// });

// app.use(sslRedirect());
// const limiter = rateLimit({
//   windowMs: 60000,
//   max: 60,
//   message: { error: "Too many requests." },
// });

// app.use(limiter);
// app.use(morgan("combined"));
// app.use(express.json({ limit: "25mb" }));
// app.use(errorHandler);

app.use("/", statusRoutes);

(async () => {
  // await connectDb();
  // initAssociations();

  https.createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem")
    },
    app
  ).listen(port, async () => {
    console.log(`Express is listening at https://localhost:${port}`);
  });
})();


export { app };