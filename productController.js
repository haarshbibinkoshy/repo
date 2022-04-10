const User = require('./models/user');
const Product = require('./models/product');
const Cart = require('./models/cart');
const { db } = require('./util/database');

const createProduct=async(req,res)=>{
    //you can add the product details as you want
    // const {productName,price,category}=req.body
    //db code to store product 
    const {id,Name, Price, slug}=req.body
   let response= db.query("INSERT INTO products (id, Name, Price, slug) VALUES (?,?,?,?)",
    [id, Name, Price, slug],
    (err, result) => {
      if (err) {
        console.log(err);
        return false;
      } else {
          return true;
        // res.send("Values Inserted");
      }
    })
   res.send(response)
}

const createCatogory=async(req,res)=>{
    //you can add the product details as you want
    // const {productName,price,category}=req.body
    //db code to store product 
   let response= db.query("INSERT INTO cat (id, Name, description, img_url, slug) VALUES (?,?,?,?)",
    [id, Name, description, img_url,slug],
    (err, result) => {
      if (err) {
        console.log(err);
        return false;
      } else {
          return true;
        // res.send("Values Inserted");
      }
    })

}
const listByCategory=async(req,res)=>{

    let response= db.query(
        `SELECT p.id,p.Name,p.Price,c.Name FROM product_schema.products p left join product_schema.product_catogories pc on p.id=pc.prod_id
        left join product_schema.catogories c on c.id=pc.catogories_id where c.Name="t"`,
    (err, result) => {
      if (err) {
        console.log(err);
        
      } else {
          return res.json(result)
        // res.send("Values Inserted");
      }
    })
}
const updateProduct=async(req,res)=>{
    //you can add the product details as you want
    const {productName,price,category}=req.body
    //db code to store product 
}

const deleteProduct=async(req,res)=>{
    const {productId}=req.body
}

const getProduct=async(req,res)=>{
    console.log(req.params.productId);
    //productId come from req.params.productId
    //api url will be like http://localhost:3000/getProduct/23432423

}

const getCategories=async(req,res)=>{
const {category}=req.body
//db code to fetch all product belong to this category the category can be subcategory too

}

const getProducts=async(req,res)=>{
    //fetch all the products according to a filter  like alphabetic or price 
}

module.exports={
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getCategories,
    getProducts,
    createCatogory
}