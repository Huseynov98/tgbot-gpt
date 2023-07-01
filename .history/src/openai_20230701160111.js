import {  Configuration, OpenAIApi } from 'openai'
import config from 'config'

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

export const openai = new OpenAI(config.get('OPENAI_KEY'))