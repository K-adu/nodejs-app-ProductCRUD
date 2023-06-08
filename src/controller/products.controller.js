const {
        addProductToDb,
        renderProductFromDb,
        updateProductInDb,
        getProductByIDFromDb,
        deleteProductsFromDb} = require('../repository/product.repository')



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

    await updateProductInDb(req,res)
    
}
const renderProductById = async (req,res)=>{
    const Product = await getProductByIDFromDb(req,res)
}

const deleteProducts = async(req,res)=>{
    try{
    const product = await deleteProductsFromDb(req,res)
    if (!product) {
        res.status(404).send()
    }
    res.send(product)
    } catch (e) {
        res.status(500).send()
    }
}


module.exports = {
    createNewProduct,
    renderProducts,
    updateProduct,
    renderProductById,
    deleteProducts
}