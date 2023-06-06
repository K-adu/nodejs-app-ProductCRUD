const Product = require('../models/Product')


//create new user
const addProductToDb =async (req,res)=>{
    const product= new Product({
        ...req.body,
        owner: req.user._id
    })
    try{
        await product.save()
        res.status(201).send(task)
    }catch(error){
        res.status(400).send(error)

    }
}


module.exports = addProductToDb

// getting the propducts



//editing the products


//deleting the products
