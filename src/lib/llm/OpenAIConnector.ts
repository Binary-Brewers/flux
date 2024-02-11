import LlmConnectorAbstract from "./LlmConnectorAbstract";
import { Message, Chat } from "./types";
import OpenAI from 'openai';

export default class OpenAIConnector extends LlmConnectorAbstract {
    public static testUrl = "https://api.openai.com/v1/models";

    private static openAI : OpenAI;
    private static model: string;

    constructor() { 
        super();

        if (!OpenAIConnector.openAI) {
            OpenAIConnector.openAI = new OpenAI({
                apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
              });

            OpenAIConnector.model = "gpt-3.5-turbo";
              
        }
    }

    public async connect(url?: string | undefined, apiKey?: string | undefined): Promise<boolean> {
        try {
            const modelExist = await OpenAIConnector.openAI.models.retrieve(OpenAIConnector.model);
            console.log(modelExist);
            return Promise.resolve(true);
        } catch(e: any) {
            console.error(e.message);
            return Promise.resolve(false);
        }
    }

    public getChatCompletion(): Promise<string> {
        // const completion = await OpenAIConnector.openAI.
        return Promise.resolve("");
    }

    public createCapture(img: BinaryData, prompt: Message): Chat {

        let capture: Chat = {model: "", messages: [prompt]}
        
        return capture;
    }
}