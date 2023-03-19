import { queryGet } from "./common"
import { AxiosResponse } from "axios";
import { IBooksInfo } from "../store/types";


export type GetQueryOptions = {
    $orderby?: string,
    orderBy: string,
    maxResults: number,
    key: string | undefined,
    q: string,
    startIndex: number
}

export type GetQueryOptions2 = {
    id: string
}

export const getBooks = (
    query?: GetQueryOptions
): Promise<AxiosResponse<IBooksInfo>> => queryGet(`https://www.googleapis.com/books/v1/volumes`, query)

export const getBook = (
    query?: string
): Promise<AxiosResponse<IBooksInfo>> => queryGet(`https://www.googleapis.com/books/v1/volumes/${query}`, query)