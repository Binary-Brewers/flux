import { Chat, Message } from "./types";

export default abstract class LlmConnectorAbstract {
    public abstract connect(url?: string, apiKey?: string): Promise<boolean>;

    public abstract getChatCompletion(): Promise<string>;

    public abstract createCapture(img: BinaryData, prompt: Message): Chat;
}