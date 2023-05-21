import admin1 from '../models/users.js'
export const store = async (req, res) => {
    // console.log(req.body)
    // const { name, code, department } = req.body

    await admin1.create({
        email: 'kareemelbalshy@fci.com',
        passward: '12345678'
    })
    res.send("create")
}