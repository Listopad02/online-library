import axios, { AxiosResponse, AxiosInstance } from "axios";
import qs from 'qs'

const BASE_URL = "/api/"

const paramsSerializer = (params: object) => {
    return qs.stringify(params).replace(/%2B/gi, '+').replace(/%3A/gi, ':')
};

export const authHttp = (): AxiosInstance => {

    const ax = axios.create({
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        baseURL: BASE_URL
    })

    return ax
}

export const queryGet = <R extends unknown>(
    method: string,
    args?: unknown
): Promise<AxiosResponse<R>> =>
authHttp().get(method, { params: args, paramsSerializer: { serialize: paramsSerializer } })