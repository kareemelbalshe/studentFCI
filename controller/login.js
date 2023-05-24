import admin1 from "../models/admin.js"

export const login =  (req, res) => {
    res.render('project/login', { layout: false })
}

export const support = (req, res) => {
    res.render('project/support', { layout: false })
}

export const about = (req, res) => {
    res.render('project/about', { layout: false })
}