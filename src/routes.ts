import { Router } from 'express'
import BookController from './controllers/BookController'

const routes = Router()

routes.post('/obras',BookController.addBook)
routes.get('/obras/',BookController.allBook)
routes.put('/obras/:id',BookController.updateBook)
routes.delete('/obras/:id',BookController.deleteBook)

export default routes 