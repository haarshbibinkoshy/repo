const {Sequelize}=require('sequelize')

const sequelize=new Sequelize(`product_schema`,`root`,`Koshysugi18@`,{
    dialect:`mysql`,
    host:`localhost`
    
})

module.exports=sequelize;
// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "",
//     database: "product_schema",
//   });

//   exports.db = db;