const fs = require('fs');

class ProductManager {
  #products;
  constructor() {
    this.#products = [];
    
  }

   

  getproducts = () => {
    return this.#products;
  };

  getProductById = (id) => {
    let productid = this.#products.find(p => p.id== id);
    if (productid) {
        return productid;
    }else {
        console.log("not found product")
    }
  }
  addProduct = (title, description, price, thumbail, code, stock) => {
    if (!title || !description || !price || !thumbail || !code || !stock) {
      console.error("incompleted product");
      return;
      // if (title!="" || description!="" || price!="" || thumbail!="" || code!="" || stock!="") {
      //     console.log("campo incompleto")

      
    }
  
     
      
    
     if (this.#products.length>0){
         for (let productB of this.#products){
             if (code === productB.code){
                 return console.log("codigo existente");
             }
         }
     }

     let id
     if (this.#products.lenght === 0) {
        id=1
     }
     else {
        id = this.#products.length + 1
     } 
     
     
    
     let newProduct = {
      id,
      title,
      description,
      price,
      thumbail,
      code,
      stock,
    };
    this.#products.push(newProduct);
  };

  
}



const product1 = new ProductManager();
product1.addProduct("herramienta", "agujereadora", 1000, "x", 8, 5);
product1.addProduct("herramienta", "taladro", 300, "p", 6, 4);
product1.addProduct("herramienta", "martillo", 30, "r", 7, 9);
product1.addProduct("herramienta", "fmafrtffffillo", 30, "r", 10, 9);
console.log(product1.getproducts());
//console.log(product1.getProductById(1))
//console.log(product1.products);
// const prueba=[1,2,3,4,"ana"]
// // fs.writeFileSync('./demo_desafio.json', JSON.stringify(obj, null, '\t'))
// const data = JSON.stringify(product1)
// const filename="products.json"
// fs.writeFileSync(filename, JSON.stringify (data,null,'/t'))
// console.log(data)

const json =JSON.stringify(product1);
 fs.writeFileSync("productos.json", json, (err)=>{
  if (err) throw err;
  console.log("kjghds")
  
  
 }) 
module.exports = ProductManager;
