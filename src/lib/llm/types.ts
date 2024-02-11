export interface Message {
    role: string,
    type: "text" | "image_url",
    content?: string,
    image_url?: {
        url: string
    },
}

export type Chat = {
    model: string,
    messages: Message[],
    maxTokens?: number,
}