import { Router } from "express";
import doctor from "../models/doctor.js";
import supject from "../models/supject.js";
import { addMatrialpost, id } from "../controller/user.js";
import { STUsubD, STUsubj, addAdmin, addAdminpost, addMatrial, adddoctor, adddoctorpost, addstudent, addstudentpost, addsubject, addsubjectpost, allStudents, alldoctors, allsubjects, avilabalSUBd, avilableSUBs, curntSub, download, loginusers, setting, supportA, timeR } from "../controller/user.js";

const router = new Router()

router.post('/', loginusers)

router.get('/admin', (req, res) => {
    res.render('project/admin', { layout: false })
})
router.get('/doctor', async (req, res) => {
    const alldoctors = await doctor.find().lean()
    const allsubjects = await supject.find().lean()
    const doc = alldoctors.find((item) => {
        console.log(item._id)
        return item._id == id
    })
    console.log({ doc, alldoctors, id })
    res.render('project/doctor', { layout: false, doc ,allsubjects})
})
router.get('/student', (req, res) => {
    res.render('project/student', { layout: false })
})



router.get('/admin/addstudent', addstudent)
router.post('/admin/addstudent', addstudentpost)

router.get('/admin/addDoctor', adddoctor)
router.post('/admin/addDoctor', adddoctorpost)

router.get('/admin/addsubject', addsubject)
router.post('/admin/addsubject', addsubjectpost)

router.get('/admin/addAdmin', addAdmin)
router.post('/admin/addAdmin', addAdminpost)

router.get('/admin/allsubjects', allsubjects)
router.get('/admin/allStudents', allStudents)
router.get('/admin/alldoctors', alldoctors)
router.get('/admin/setting', setting)
router.get('/admin/STUsubj', STUsubj)
router.get('/admin/supportA', supportA)
router.get('/admin/timeR', timeR)



router.get('/doctor/avilabalSUBd', avilabalSUBd)
router.get('/doctor/addMatrial', addMatrial)
router.post('/doctor/addMatrial', addMatrialpost)
router.get('/doctor/STUsubD', STUsubD)



router.get('/student/avilableSUBs', avilableSUBs)
router.get('/student/curntSub', curntSub)
router.get('/student/download', download)

export default router