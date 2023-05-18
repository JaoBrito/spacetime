import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: 'true', // Todas as URLs de front-end poderão acessar nosso back-end
  // origin: ['http://localhost:3000', 'http://rocketseat.com.br/'], => Para especificar quem poderá acessar o back
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
