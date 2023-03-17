import { queryGet } from "./common"
import { AxiosResponse } from "axios";


export type GetQueryOptions = {
    $orderby?: string,
    maxResults: number,
    key: string,
    q: string
}

export const getBooks = (
    query?: GetQueryOptions
): Promise<AxiosResponse<any>> => queryGet(`https://www.googleapis.com/books/v1/volumes`, query)