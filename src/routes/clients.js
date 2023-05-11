import Router from "express"

export const router_clients = Router()

let clients = [
    {
        id: 1,
        name: "Ayoria",
        lastname: "Chagua",
        birthdate: "01-02-03"
    },
    {
        id: 2,
        name: "Edison",
        lastname: "Segura",
        birthdate: "02-03-04"
    },
    {
        id: 3,
        name: "Frank",
        lastname: "Castro",
        birthdate: "05-06-07"
    },
    {
        id: 4,
        name: "Carlos",
        lastname: "Miranda",
        birthdate: "02-08-20"
    },
]

router_clients.get('/clients', (req, res)=>{
    res.render("clients", {clients})
})