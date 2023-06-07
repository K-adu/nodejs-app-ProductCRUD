const Product = require('../models/Product')


//create new user
const addProductToDb =async (req,res)=>{
    const product= new Product({
        ...req.body,
        owner: req.user._id
    })
    try{
        await product.save()
        res.status(201).send('success')
    }catch(error){
        res.status(400).send('cantnot save')

    }
}
const renderProductFromDb = async (req,res)=>{
    try {
        // Fetch all products from the database
        const products = await Product.find({}, '-owner').lean();
        return products

        // You can perform any other rendering logic here
    
      } catch (error) {
        console.error('Error fetching and rendering products:', error.message);
      }
}

const updateProductInDb = async (req,res)=>{

    try {
        const product = await Product.findOne({ _id: req.params.id, owner: req.user._id})

        if (!product) {
            return res.status(404).send()
        }

        updates.forEach((update) => product[update] = req.body[update])
        await product.save()
        res.status(200).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}


module.exports = {
    addProductToDb,
    renderProductFromDb,
    updateProductInDb,
}

// getting the propducts



//editing the products


//deleting the products
