class ProductManager  {
    #products
    constructor(){ 
        this.#products=[];
    }

   
    getproducts =()=>{
        return this.#products
    }
    addProduct =(title,description,price,thumbail,code,stock) =>{
        let newProduct = {
            title,description,price,thumbail,code,stock
        }
        this.#products.push(newProduct);
    }
    
}

const product1=new ProductManager();
product1.addProduct("herramienta","agujereadora",1000,"x",1,5)
console.log(product1.getproducts());
//  console.log(product1.products);