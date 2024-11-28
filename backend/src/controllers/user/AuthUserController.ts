import { Request, Response } from "express";
import { AuthUserService } from "../../services/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const authUserService = new AuthUserService(); // Inst�ncia correta da classe AuthUserService

        const auth = await authUserService.execute({
            email,
            password,
        });

        return res.json(auth);
    }
}

export { AuthUserController };
