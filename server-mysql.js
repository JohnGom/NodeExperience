import { createApp } from './app.js'
import { MovieModel } from './src/models/mysql/movies.js'

createApp({ movieModel: MovieModel })
