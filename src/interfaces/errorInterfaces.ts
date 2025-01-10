export interface customErrorInterface {
    response?: {
        status: number;
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        data: Record<string, any>;
    };
    message?: string;
}

