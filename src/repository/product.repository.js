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
const renderProductFromDb = async (userId) => {
    try {
      // Fetch products associated with the given user ID
      const products = await Product.find({ owner: userId }, '-owner').lean();
      return products;
      
      // You can perform any other rendering logic here
      
    } catch (error) {
      console.error('Error fetching and rendering products:', error.message);
      throw error;
    }
  };

  const getProductByIDFromDb = async (req,res)=>{
    const product = await Product.findOne({ _id: req.params.id, owner: req.user._id})
    // console.log(product)
    res.send(product)
  }



const updateProductInDb = async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'description','price']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
         res.status(400).send({ error: 'Invalid updates!' })
    }
    try {
        console.log(req.body)

        const product = await Product.findOne({ _id: req.params.id,owner: req.user._id})
        console.log(product)
        if (!product) {
             res.status(404).send()
        }

        updates.forEach((update) => product[update] = req.body[update])
        await product.save()
         res.status(200).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}

const deleteProductsFromDb = async (req,res)=>{
    try {
        console.log(req)
        const product = await Product.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        return product

    }catch(error){
        return error
    }

}

module.exports = {
    addProductToDb,
    renderProductFromDb,
    updateProductInDb,
    getProductByIDFromDb,
    deleteProductsFromDb
}

// getting the propducts



//editing the products


//deleting the products
