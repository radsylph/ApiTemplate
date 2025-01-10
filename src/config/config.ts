import dotenv from "dotenv";
dotenv.config();

console.log("NODE_ENV:", process.env.NODE_ENV);

const isDevelopment = process.env.NODE_ENV === "development";
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const config: Record<string, any> = {
    baseURL: isDevelopment ? process.env.TEST_BASE_URL : process.env.BASE_URL,
    port: process.env.PORT
};

console.log(config.baseURL);

export default config;
