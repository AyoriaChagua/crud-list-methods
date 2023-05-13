const { Router } = require("express");

const router_products = Router()

let products = [
    {
        id: 1,
        name: "Laptop",
        brand: "Apple",
        price: 9999.99,
        stock: 20
    },
    {
        id: 2,
        name: "iPhone",
        brand: "Apple",
        price: 3000.90,
        stock: 25
    },
    {
        id: 3,
        name: "iPad",
        brand: "Apple",
        price: 5000.95,
        stock: 23
    },
]

router_products.get('/products', (req, res)=>{
    res.render("products", {products})
})

router_products.post('/products', (req, res)=>{
    const product = req.body
    products.push(product)
    res.redirect("/products")
})



router_products.get('/product/delete/:id', (req, res)=>{
    const { id } = req.params
    products.forEach((product, index) => {
        if(product.id == id){
            products.splice(index, 1)
            return
        }
    })
    res.redirect("/p/products")
})

router_products.get('/product/:id', (req, res)=>{
    const { id } = req.params

    const product = products.find((product) => product.id == id);

    res.render('product-edit', {product})
    
})

router_products.post('/product/:id', (req, res)=>{
    const { id } = req.params
    
    console.log(id)

    const {id_up, name, price, brand, stock} = req.body

 
    
    const newproduct = {
        id : id_up,
        name,
        brand,
        price,
        stock
    }

    products.forEach((product, index)=>{
        if(product.id == id){
            products[index] = newproduct
            return
        }
    })
    res.redirect('/products')
})


module.exports = router_products
