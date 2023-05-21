import admin1 from '../models/users.js'
export const login = (req, res) => {
    res.render('project/login', { layout: false })
}

export const support = (req, res) => {
    res.render('project/support', { layout: false })
}

export const about = (req, res) => {
    res.render('project/about', { layout: false })
}

export const loginusers = async (req, res) => {
    const { email, pass, kind } = req.body
    if (kind == "admin") {
        const loginuser = await admin1.findOne({ email })
        const id = loginuser._id
        if (loginuser.email == email && loginuser.passward == pass) {
            res.render("project/admin", { layout: false, loginuser })
        }
    }
    else if (kind == "doctor") {
        return res.redirect('/doctor/:_id')
    }
    else if (kind == "student") {
        return res.redirect('/student/:_id')
    }
}
