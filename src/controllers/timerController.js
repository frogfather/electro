import { setTimerStatus, startTimer, stopTimer, timerStatus } from "../index.js";
import expressAsyncHandler from "express-async-handler";

export const startElectroTimer = expressAsyncHandler(async(req, res) => {
    const options = req.body;
    const startResult = startTimer(options);
    res.status(200).json({
        result: startResult
    })
});

export const stopElectroTimer = expressAsyncHandler(async(req,res) => {
    stopTimer();
    res.status(200).json({
        result: "stopped"
    })
});

export const getElectroTimerStatus = expressAsyncHandler(async(req,res) => {
    const timerStat = timerStatus();
    res.status(200).json({
        result: {
            timerStatus: timerStat
        }
    })
});

export const setElectroTimerStatus = expressAsyncHandler(async(req,res) => {
    const options = req.body;
    setTimerStatus(options);
    const timerStat = timerStatus();
    res.status(200).json({
        result: {
            timerStatus: timerStat
        }
    })
})
