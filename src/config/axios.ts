// axios.ts
import axios, {
    type AxiosInstance,
    type InternalAxiosRequestConfig,
    type AxiosResponse,
} from "axios";
import config from "./config";
//import { getToken } from "../helpers/token";

import type { //interfaces
    //accessTokenInterface,
    customErrorInterface,
} from "../interfaces/index";

class APIClient {
    //private token: accessTokenInterface | null;
    private baseURL: string;
    private timeout: number;
    private client: AxiosInstance;
    private tokenClient: AxiosInstance;

    constructor(baseURL: string, timeout = 10000) {
        //this.token = null;
        this.baseURL = baseURL;
        this.timeout = timeout;

        this.client = axios.create({
            baseURL: baseURL,
            timeout: timeout,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            withCredentials: true, // Habilita el uso de cookies
        });

        this.tokenClient = axios.create({
            baseURL: baseURL,
            timeout: timeout,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });

        // this.client.interceptors.request.use( //interceptor por si necesito el access token
        //     async (
        //         config: InternalAxiosRequestConfig,
        //     ): Promise<InternalAxiosRequestConfig> => {
        //         try {
        //             const token = await getToken();
        //             if (config.headers) {
        //                 config.headers.Authorization = `Bearer ${token}`;
        //             }
        //         } catch (error: unknown) {
        //             const err = error as customErrorInterface;
        //             console.error("Error al generar el token:", err.message);
        //             if (err.response) {
        //                 console.error("Response data:", err.response.data);
        //                 console.error("Response status:", err.response.status);
        //             }
        //             throw new Error(`No se pudo generar el token: ${err.message}`);
        //         }
        //         return config;
        //     },
        //     (error) => {
        //         return Promise.reject(error);
        //     },
        // );
    }

    get(url: string): Promise<AxiosResponse> {
        return this.client.get(url).catch((error: unknown) => {
            const err = error as customErrorInterface;
            console.error("Error en GET request:", err.message);
            if (err.response) {
                console.error("Response data:", err.response.data);
                console.error("Response status:", err.response.status);
            }
            throw new Error(`GET request failed: ${err.message}`);
        });
    }

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    post(url: string, data: Record<string, any>): Promise<AxiosResponse> {
        return this.client.post(url, data).catch((error: unknown) => {
            const err = error as customErrorInterface;
            console.error("Error en POST request:", err.message);
            if (err.response) {
                console.error("Response data:", err.response.data);
                console.error("Response status:", err.response.status);
            }
            throw new Error(`POST request failed: ${err.message}`);
        });
    }

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    put(url: string, data?: Record<string, any>): Promise<AxiosResponse> {
        return this.client.put(url, data).catch((error: unknown) => {
            const err = error as customErrorInterface;
            console.error("Error en PUT request:", err.message);
            if (err.response) {
                console.error("Response data:", err.response.data);
                console.error("Response status:", err.response.status);
            }
            throw new Error(`PUT request failed: ${err.message}`);
        });
    }

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    delete(url: string, data?: Record<string, any>): Promise<AxiosResponse> {
        return this.client.delete(url, { data }).catch((error: unknown) => {
            const err = error as customErrorInterface;
            console.error("Error en DELETE request:", err.message);
            if (err.response) {
                console.error("Response data:", err.response.data);
                console.error("Response status:", err.response.status);
            }
            throw new Error(`DELETE request failed: ${err.message}`);
        });
    }
}

export default APIClient;
