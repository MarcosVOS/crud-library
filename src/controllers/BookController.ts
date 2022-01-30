import {Request,Response} from 'express'
import Book from '../schemas/Book'

class BookControllers{

  public async addBook(req:Request,res:Response):Promise<Response>{
    let book = {
      id: 1 + await Book.find().count(),
      titulo: req.body.titulo,
      editora: req.body.editora,
      foto: req.body.foto, 
      autores: req.body.autores
    }
    if(book.titulo != null && book.editora != null && book.foto != null && book.autores != null){
    await Book.create(book)
    return res.send("Adicionado com sucesso")
    }else{
      return res.send("Houve um erro na requisição")
    }
  }

  public async allBook(req:Request,res:Response):Promise<Response>{
    const books = await Book.find()
    return res.json(books)
  }

  public async updateBook(req:Request,res:Response):Promise<Response>{  
    const id = req.params.id 

      try{
        let doc = await Book.find({id}).updateOne(req.body)
        if(doc.modifiedCount != 0 ){
          return res.send("modificado com sucesso")
        }else{
          return res.send("Houve um erro no id ou foram enviados valores iguais a os atuais")
        }
      }catch(error){
        return res.send(error.menssage)
      }
  }

  public async deleteBook(req:Request,res:Response):Promise<Response>{
    const id = req.params.id
      try{
        let doc = await Book.find({id}).deleteOne()
        if(doc.deletedCount != 0){
          res.send("Deletado com sucesso")
        }else{
          res.send("Houve um erro")
        }
      }catch(error){
        return res.send(error.menssage)
      }
  }
}

export default new  BookControllers() 