const {addProductToDb,renderProductFromDb,updateProductInDb,getProductByIDFromDb} = require('../repository/product.repository')



const createNewProduct = (req,res)=>{
    
    
    addProductToDb(req,res)

}


const renderProducts = async (req, res) => {
    try {
      const userId = req.user.id;
      const products = await renderProductFromDb(userId);
      
      products.forEach((product) => {
        console.log('Title:', product.title);
        console.log('Description:', product.description);
        console.log('Price:', product.price);
        console.log('---');
      });
  
      res.send(products);
    } catch (error) {
      console.error('Error fetching and rendering products:', error.message);
      res.status(500).send('Internal Server Error');
    }
  };
  

const updateProduct = async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'description','price']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    await updateProductInDb(req,res)
    
}
const renderProductById = async (req,res)=>{
    const Product = await getProductByIDFromDb(req,res)
}


module.exports = {
    createNewProduct,
    renderProducts,
    updateProduct,
    renderProductById,
}