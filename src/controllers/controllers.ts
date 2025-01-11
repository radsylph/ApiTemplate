import TestModule from "../modules/module";
import type { Request, Response } from "express";
const Testmodule = new TestModule();

const getMethod = (req: Request, res: Response) => {
    Testmodule.getMethod(req, res);
}

const postMethod = (req: Request, res: Response) => {
    Testmodule.postMethod(req, res);
}

export { getMethod, postMethod };