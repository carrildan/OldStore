const express = require("express");
const productCategories = require("./Routes/ProductCategories");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/",productCategories);

const PORT = 5001;

const server = app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
});