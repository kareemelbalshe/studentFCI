import { Router } from "express";
import { about, login, loginusers, support } from "../controller/login.js";
import { store } from "../controller/admin.js";

const router = new Router()

router.get('/',login)

router.get('/support',support)

router.get('/about',about)

router.post('/:_id',loginusers)


export default router