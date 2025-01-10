import express, { Request, Response } from "express";
import config from "./config/config";
import cors from "cors";
import testRouter from "./routes/routes";

const app = express();

const port: number = config.port;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cors(),
);

app.use("/api/v1/example", testRouter);

const startServer = async (): Promise<void> => {
    try {
        app.listen(port, () => {
            console.log(`Example app listening on url ${port}!`);
        });
    } catch (error) {
        console.error("Unable to connect to the KeyCloak database:", error);
    }
};

(async () => {
    await startServer();
})();
