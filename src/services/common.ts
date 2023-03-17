// const BASE_URL = "/api/"

// export type Header = {
//     "Content-Type": string
// }

// /**
//  * Создать http запрос с параметрами
//  */
// export const authHttp = (contentType?: string): AxiosInstance => {
//     let headers: Header = {
//         "Content-Type": contentType,
//     }

//     const ax = axios.create({
//         baseURL: BASE_URL,
//         headers,
//     })

//     return ax
// }

// /** Вызвать get метод API. */
// export const queryGet = <R extends unknown>(
//     method: string,
//     args?: unknown
// ): Promise<AxiosResponse<R>> =>
//     authHttp(contentType).get(method, { params: args })


// temp
export {}