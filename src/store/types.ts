export interface Root {
    kind: string
    totalItems: number
    items: Item[]
}
    
export interface Item {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
    saleInfo: SaleInfo
    accessInfo: AccessInfo
    searchInfo?: SearchInfo
}
    
export interface VolumeInfo {
    title: string
    publisher: string
    readingModes: ReadingModes
    pageCount: number
    printType: string
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: PanelizationSummary
    imageLinks: ImageLinks
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
    categories: string[]
    authors: string[]
    description: string
}
    
export interface ReadingModes {
    text: boolean
    image: boolean
}
    
export interface PanelizationSummary {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
}
    
export interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
}   
    
export interface SaleInfo {
    country: string
    saleability: string
    isEbook: boolean
}
    
export interface AccessInfo {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: Epub
    pdf: Pdf
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
}
    
export interface Epub {
    isAvailable: boolean
}
    
export interface Pdf {
    isAvailable: boolean
}
    
export interface SearchInfo {
    textSnippet: string
}

export interface IBooksInfo {
    kind?: string
    totalItems?: number
    items?: Item[]
}

export interface IBookInfo {
    book: Item
}