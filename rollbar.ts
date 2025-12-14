import type { Configuration } from "rollbar";

export const clientConfig: Configuration = {
    accessToken: process.env["ROLLBAR_KHRAOS.IN_SERVER_TOKEN_1765680866"]!,
    environment: process.env.NODE_ENV,
    captureUncaught: true,
    captureUnhandledRejections: true,
};
