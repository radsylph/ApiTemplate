import TestModule from "../modules/module";
import type { Request, Response } from "express";
const Testmodule = new TestModule();

const getMethod = (req: Request, res: Response) => {
    Testmodule.testMethod(req, res);
}

export { getMethod };