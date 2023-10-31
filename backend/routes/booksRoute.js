import express from 'express';
import { Book } from '../models/bookModels.js';

const router = express.Router();


router.post('/', async(req,res)=>{
    try{
        console.log("yo");
        if(!req.body.title || !req.body.author || !req.body.publishYear)
        {
            return res.status(400).send({
                message: 'Send all the fields i.e title, author , etc'
            })
        }
        const newBooks={
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const Books= await Book.create(newBooks);
        return res.status(201).send(Books);
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

router.get('/', async(req, res)=>{
    try{
        const books= await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    }
    catch(error)
    {
        console.log("eror here");
        res.status(500).send({message: error.message});
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const {id} =req.params;
        const books= await Book.findById(id);
        return res.status(200).json({
            count: books.length,
            data: books
        })
    }
    catch(error)
    {
        console.log(error.message);
    }
})

router.put('/:id', async(req, res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear )
        {
            return res.status(400).send({
                message: "provide all fields"
            })
        }
        const {id} = req.params;
        const result= await Book.findByIdAndUpdate(id, req.body);
        if(!result)
        {
            return res.status(404).send({
                message: "there is an error in fetching the book"
            })
        }
        else
        {
        return res.status(200).send({messgae: 'book updated successfully'});
        }
    }
    catch(error)
    {
        console.log(error.message);
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const result= await Book.findByIdAndDelete(id);
        if(!result)
        {
            return res.status(400).send({messgae: 'Book not found'});
        }
        return res.status(200).send({message: 'Book deleted successfully'});
    }
    catch(error)
    {
        res.status(500).send({message: error.message});
    }
})

// export const booksRoute= router;
export default router;
// module.exports= router;