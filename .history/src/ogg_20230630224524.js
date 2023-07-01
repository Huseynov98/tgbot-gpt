import axios from 'axios'
import {createWriteStream} from 'fs'


class OggConverter{
    constructor() {}

    toMp3() {}

    async create(url, filename) {
            try {
                const response = await axios({
                    method: 'get',
                    url,
                    responseType: 'stream'
                })
                const stream = createWriteStream(filename)
            } catch (e) {
                console.log(error, e.message)
            }
    }
}

export const ogg = new OggConverter()