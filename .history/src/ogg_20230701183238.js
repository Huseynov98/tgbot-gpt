import axios from 'axios'
import ffmpeg from 'fluent-ffmpeg'
import installer from '@ffmpeg-installer/ffmpeg'
import {createWriteStream} from 'fs'
import {dirname, resolve} from 'path'
import {fileURLToPath} from 'url'
import { removeFile } from './utils.js'



const __dirname = dirname(fileURLToPath(import.meta.url))


class OggConverter{
    constructor() {
        ffmpeg.setFfmpegPath(installer.path)
    }

    toMp3(input, output) {
        try{
            const outputPath = resolve(dirname(input), `${output}.mp3`)
            return new Promise((resolve, reject) => {
                ffmpeg(input)
                .inputOption('-t 30')
                .output(outputPath)
                .on('end', () => {
                  removeFile(input)
                  resolve(outputPath)
                })
                .on('error', (err) => reject(err.message))
                .run()

            })
        } catch (e) {
            console.log('Error while creating mp3', e.message)
        }
    }

    async create(url, filename) {
      try {
        const oggPath = resolve(__dirname, '../src/voices', `${filename}.ogg`);
        const response = await axios({
          method: 'get',
          url,
          responseType: 'stream'
        });
    
        const writer = createWriteStream(oggPath);
    
        return new Promise((resolve, reject) => {
          response.data.pipe(writer);
    
          writer.on('finish', () => resolve(oggPath));
          writer.on('error', (err) => reject(err));
        });
      } catch (e) {
        console.log('Error while creating ogg', e.message);
      }
    }
    
}

export const ogg = new OggConverter()

