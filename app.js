const express = require('express');
const ProductManager = require('./productManager')
const path = require('path')

const app = express();
const port =8080
app.use(express.json());

const product1 = new ProductManager();
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "../index.html"));

// })

app.get('/', (req, res) => {
    const products = this.products.getProducts();
    res.end(console.log("kjhgkjn"))
});

// app.get('/products/:id', (req, res) => {
//     const id = parseInt (req.params.id);
//     const product=manager.getProductById(id);
//     if(product){
//         res.send(produc2t)
//     }else{
//         res.send("no product found")
//     }
// });


app.listen(port,()=> console.log("server up en http://locallhost:${port}"));