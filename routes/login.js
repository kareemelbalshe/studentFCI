import { Router } from "express";
import { about, login, support } from "../controller/login.js";

const router = new Router()

router.get('/',login)

router.get('/support',support)

router.get('/about',about)



export default router