const express = require("express");
const productCategories = express.Router();
const mysql = require("mysql");

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "12345678",
    database : "oldstore",
    port : 3306,
    multipleStatements : true
})

productCategories.get("/productCategories",(req,res)=>{
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

productCategories.get("/getProducts",(req,res)=>{
    let productData;

    pool.query("Select * from products",(error,rows)=>{
        if(error){
            res.status(500).send(error);
        }else{
            productData = rows;
            console.log(res.status(200).send(productData));
        }
    })
})
module.exports = productCategories;