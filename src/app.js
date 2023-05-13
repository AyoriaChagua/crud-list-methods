const express = require("express");
const { engine } = require("express-handlebars");
const  router_products  = require("./routes/products.js");
const  router  = require("./routes/index.js");


const port = 5000

const app = express()


app.set("views",  "views")

app.engine(
    ".hbs",
    engine({
        extname: ".hbs"
    })
)

app.set("view engine", ".hbs")

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router_products)


app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})
