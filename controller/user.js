import admin1 from '../models/admin.js'
import student from '../models/student.js'
import doctor from '../models/doctor.js'
import supject from '../models/supject.js'
import pdfs from '../models/pdf.js'
import bcrypt from 'bcryptjs'


export let id
export const loginusers = async (req, res) => {
    const { email, pass, kind } = req.body
    if (kind == "admin") {
        const loginuser = await admin1.findOne({ email })
        id = loginuser._id
        const iscorrectpass = bcrypt.compareSync(pass, loginuser.passward)
            if (loginuser.email == email && iscorrectpass) {
                return res.redirect('user/admin')
            }
    }
    else if (kind == "doctor") {
        const loginuser = await doctor.findOne({ email })
        id = loginuser._id
        console.log(id)
        const iscorrectpass = bcrypt.compareSync(pass, loginuser.Passward)
        if (iscorrectpass) {
            if (loginuser.email == email) {
                return res.redirect('user/doctor')
            }
        }
    }
    else if (kind == "student") {
        const loginuser = await student.findOne({ email })
        id = loginuser._id
        const iscorrectpass = bcrypt.compareSync(pass, loginuser.Passward)
        if (iscorrectpass) {
            if (loginuser.email == email ) {
                return res.redirect('user/student')
            }
        }
    }
}

export const addstudent = (req, res) => {
    res.render('project/admin/add/addStudent', { layout: false })
}

export const addstudentpost = async (req, res) => {
    const { e, n, p, l, d, a, aID, f, c, add, nID, pN, g } = req.body
    const salt = bcrypt.genSaltSync(10)
    const encrytedpass = bcrypt.hashSync(p, salt)
    await student.create({
        email: e,
        Name: n,
        Passward: encrytedpass,
        Level: l,
        Department: d,
        Age: a,
        Acadmic: aID,
        Fuclty: f,
        College: c,
        Address: add,
        National: nID,
        Phone: pN,
        Gender: g
    })
    const allStudents = await student.find().lean()
    allStudents.map((item) => {
        if (item.Acadmic == a) {

        }
    })
    res.redirect('/user/admin/addstudent')
}

export const adddoctor = (req, res) => {
    res.render('project/admin/add/addDoctor', { layout: false })
}

export const adddoctorpost = async (req, res) => {
    const { e, n, p, d, a, f, c, add, nID, pN, g } = req.body
    const salt = bcrypt.genSaltSync(10)
    const encrytedpass = bcrypt.hashSync(p, salt)
    await doctor.create({
        email: e,
        Name: n,
        Passward: encrytedpass,
        Department: d,
        Age: a,
        Fuclty: f,
        College: c,
        Address: add,
        National: nID,
        Phone: pN,
        Gender: g
    })
    res.redirect('/user/admin/addDoctor')
}

export const addsubject = (req, res) => {
    res.render('project/admin/add/addSubject', { layout: false })
}

export const addsubjectpost = async (req, res) => {
    const { n, ID, l, d, p } = req.body
    await supject.create({
        name: n,
        ID: ID,
        Level: l,
        Department: d,
        preRequisite: p,
    })
    res.redirect('/user/admin/addsubject')
}

export const addAdmin = async (req, res) => {
    res.render('project/admin/add/addAdmin', { layout: false })
}

export const addAdminpost = async (req, res) => {
    const { email, password } = req.body
    const salt = bcrypt.genSaltSync(10)
    const encrytedpass = bcrypt.hashSync(password, salt)
    await admin1.create({
        email: email,
        passward: encrytedpass
    })
    res.redirect('/user/admin/addAdmin')
}

export const allsubjects = async (req, res) => {
    const allsubjects = await supject.find().lean()
    res.render('project/admin/allsubjects', { layout: false, allsubjects })
}

export const allStudents = async (req, res) => {
    const allStudents = await student.find().lean()
    res.render('project/admin/allStudents', { layout: false, allStudents })
}

export const alldoctors = async (req, res) => {
    const alldoctors = await doctor.find().lean()
    res.render('project/admin/alldoctors', { layout: false, alldoctors })
}

export const setting = (req, res) => {
    res.render('project/admin/setting', { layout: false })
}

export const STUsubj = (req, res) => {
    res.render('project/admin/STUsubj', { layout: false })
}

export const supportA = (req, res) => {
    res.render('project/admin/setting/supportA', { layout: false })
}

export const timeR = (req, res) => {
    res.render('project/admin/setting/timeR', { layout: false })
}






export const avilabalSUBd = (req, res) => {
    res.render('project/doctor/avilabalSUBd', { layout: false })
}

export const addMatrial = (req, res) => {
    res.render('project/doctor/addMatrial', { layout: false })
}

export const addMatrialpost =async (req, res) => {
    const {nameOfSheet,pdf}=req.body
    const MongoClient = require('mongodb').MongoClient;
    const fs = require('fs');
    const pdff=fs.readFileSync(pdf)
    MongoClient.connect(process.env.mongo, function(err, client) {
        if(err) throw err;
      
        const db = client.db(MongoClient);
      
        const collection = db.collection(pdf);
      
        collection.insertOne(pdfDocument, function(err, result) {
          if(err) throw err;
      
          console.log('PDF file uploaded successfully');
          client.close();})})
    await pdfs.create({
        nameOfSheet,
        pdf:pdff
    })
    
    res.redirect('/user/doctor/addMatrial')
}

export const STUsubD = (req, res) => {
    res.render('project/doctor/STUsubD', { layout: false })
}




export const avilableSUBs = (req, res) => {
    res.render('project/student/avilableSUBs', { layout: false })
}

export const curntSub = (req, res) => {
    res.render('project/student/curntSub', { layout: false })
}

export const download = (req, res) => {
    res.render('project/student/download', { layout: false })
}