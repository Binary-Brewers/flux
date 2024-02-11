import { ChatCompletionChunk } from "openai/resources/index.mjs";
import { Chat } from "./types";
import { Stream } from "openai/streaming.mjs";

export default abstract class LlmConnectorAbstract {
    public abstract connect(url?: string, apiKey?: string): Promise<boolean>;

    public abstract getChatCompletionStream(chat: Chat): Promise<Stream<ChatCompletionChunk>>;

    public abstract createCapture(img: BinaryData, prompt: string): Chat;
}