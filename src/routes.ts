import { Router } from "express";

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Hello routes')
})

export default routes