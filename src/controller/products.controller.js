const {addProductToDb,renderProductFromDb,updateProductInDb} = require('../repository/product.repository')



const createNewProduct = (req,res)=>{
    
    
    addProductToDb(req,res)

}


const renderProducts = async (req,res)=>{

    const products = await renderProductFromDb(req,res)
    products.forEach((product) => {
        console.log('Title:', product.title);
        console.log('Description:', product.description);
        console.log('Price:', product.price);
        console.log('---');
      });

    res.send('success')
}

const updateProduct = async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'description','price']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    updateProductInDb(req,res)
    

}




module.exports = {
    createNewProduct,
    renderProducts,
    updateProduct,
}