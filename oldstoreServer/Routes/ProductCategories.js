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

productCategories.get("/",(req,res)=>{
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

module.exports = productCategories;