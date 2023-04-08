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


app.listen(port,()=> console.log("server up en http://locallhost:${port}"));