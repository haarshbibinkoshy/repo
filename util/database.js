// const {Sequelize}=require('sequelize')

// const sequelize=new Sequelize(`ecomapi`,`root`,`965636@Leb`,{
//     dialect:`mysql`,
//     host:`localhost`
    
// })

// module.exports=sequelize;
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "product_schema",
  });

  exports.db = db;