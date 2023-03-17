import axios, { AxiosResponse, AxiosInstance } from "axios";

const BASE_URL = "/api/"

/**
 * Создать http запрос с параметрами
 */
export const authHttp = (contentType?: string): AxiosInstance => {

    const ax = axios.create({
        baseURL: BASE_URL,
    })

    return ax
}

/** Вызвать get метод API. */
export const queryGet = <R extends unknown>(
    method: string,
    args?: unknown
): Promise<AxiosResponse<R>> =>
    authHttp().get(method, { params: args })