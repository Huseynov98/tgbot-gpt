import axios from 'axios'
import {createWriteStream} from 'fs'
import {dirname, resolve} from 'path'
import {fileURLToPath} from 'url'



const __dirname = dirname(fileURLToPath(import.meta.url))


class OggConverter{
    constructor() {}

    toMp3() {}

    async create(url, filename) {
            try {
                const oggPath = resolve(__dirname, '../voces', `${filename}.ogg`)
                const response = await axios({
                    method: 'get',
                    url,
                    responseType: 'stream'
                })
                return new Promise(resolve => {
                    const stream = createWriteStream(oggPath)
                    response.data.pipe(stream)
                    stream.on('finish', () => {oggPath})
                })
                
            } catch (e) {
                console.log(error, e.message)
            }
    }
}

export const ogg = new OggConverter()