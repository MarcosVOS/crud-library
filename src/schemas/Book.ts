import { Schema, model, Document} from 'mongoose'

interface BookInterface extends Document{
  id: Number,
  titulo: String,
  editora: String,
  foto: String, 
  autores: Array<String>
}

const BookSchema = new Schema({ 
  id: Number,
  titulo: String,
  editora: String,
  foto: String, 
  autores: Array
},{
  versionKey: false
})

export default model<BookInterface>('Book',BookSchema)