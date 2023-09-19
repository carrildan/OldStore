const express = require("express");
const product = express.Router();
const mysql = require("mysql");

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "12345678",
    database : "oldstore",
    port : 3306,
    multipleStatements : true
})

product.get("/productCategories",(req,res)=>{
    let categoryData;
 
    pool.query("Select * from categories",(error,categories)=>{
        if(error){
            categoryData = error;
            res.status(500).send(categoryData);
        }else{
            categoryData = categories;
            console.log(res.status(200).send(categoryData));
        }
    })
    
}) 

product.get("/getProducts",(req,res)=>{
    let productData;

    pool.query("select * from products",(err,rows)=>{
        if(err){
            res.status(500).send(err);
        }else{
            productData = rows;
            console.log(res.status(200).send(productData));
        }
    })
})
module.exports = product;