
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.use("/add-product", (req,res,next)=>{
    res.send('<form action="/product" method="POST">Product : <input type="text" name="title"> Product Size: <input type="number" name="size"><button type="submit">Add Product</button></form>');
});

app.post("/product", (req, res, next) => {
    console.log(`Product : ${req.body.title} and Product Size : ${req.body.size}`);
    res.redirect('/');
});

app.get("/", (req,res,next)=>{
    res.send("<h1>Product added</h1>");
});



app.listen(3000);