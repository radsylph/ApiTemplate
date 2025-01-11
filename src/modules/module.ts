import {
    check,
    validationResult,
    type ValidationChain,
} from "express-validator";
import type { Request, Response } from "express";

export default class TestModule {
    async validateRequest(
        req: Request,
        res: Response,
        validations: ValidationChain[]
    ) {
        for (const validation of validations) {
            await validation.run(req);
        }
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({
                message: "Validation errors",
                errors: result.array(),
            });
        }
    }

    async getMethod(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: "hola" })
    }

    async postMethod(req: Request, res: Response): Promise<Response> {
        const { param } = req.body;
        const validations = [
            await check(param).notEmpty().withMessage("the param must not be null")
        ]
        const validationError = await this.validateRequest(req, res, validations);
        if (validationError) return validationError;
        return res.status(201).json({ message: param });
    }

}
