const express = require('express');
const ProductManager = require('../productManager')

const app = express();
const port =8080

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));

})

app.get('/products', (req, res) => {
    const limit = parseInt (req.params.limit);
    res.send(products)
});

app.get('/products/:id', (req, res) => {
    const id = parseInt (req.params.id);
    const product=manager.getProductById(id);
    if(product){
        res.send(product)
    }else{
        res.send("no product found")
    }
});


app.listen(port,()=> console.log("server up en http://locallhost:${port}"));