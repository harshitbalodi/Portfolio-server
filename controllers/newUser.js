import { Router } from "express";

const newUserRouter = Router();    

newUserRouter.post("/", (req, res) => {
    res.send("Hello");
});

export default newUserRouter;