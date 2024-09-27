import { createApp } from './app.js'
import { MovieModel } from './src/models/local-file/movies.js'

createApp({ movieModel: MovieModel })
