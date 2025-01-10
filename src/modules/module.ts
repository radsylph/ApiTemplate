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


    async testMethod(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ test: "hola" })
    }
}
