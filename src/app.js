import express from "express";
import {fileURLToPath} from "url"
import { dirname } from "path";
import path from "path";
import {engine} from "express-handlebars"
import { router_clients } from "./routes/clients.js" 
import { router_products } from "./routes/products.js";        
import { router } from "./routes/index.js";


const port = 5000

const app = express()

const __filename =  fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

app.set("views", path.join(__dirname, "views"))

app.engine(
    ".hbs",
    engine({
        extname: ".hbs"
    })
)

app.set("view engine", ".hbs")

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router)
app.use(router_clients)
app.use(router_products)


app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})
