import {  Configuration, OpenAIApi } from 'openai'


class OpenAI {
    constructor(apiKey) {
        const configuration = new Configuration({
            apiKey,
        });
        this.openai = new OpenAIApi(configuration);
    }

    chat(){}

    transcription() {}
}

export const openai = new OpenAI()