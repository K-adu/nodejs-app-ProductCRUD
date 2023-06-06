const {addProductToDb} = require('../repository/product.repository')



const createNewProduct = (req,res)=>{
    
    
    addProductToDb(req,res)

}

module.exports = createNewProduct