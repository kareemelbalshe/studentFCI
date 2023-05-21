let emailStudent=[
    {
        email: "student",
        pass: 123456789,
    }
]
let emailDoctor=[
    {
        email: "doctor",
        pass: 87654321
    }
]
let emailAdmin=[
    {
        email: "kareemelbalshy@fci.com",
        pass: 12345678
    }
]
let infoStudent=[]
let InfoDoctor=[]

let loginS=document.getElementById('loginS')
let email=document.getElementById('email')
let pass=document.getElementById('pass')
let radioBtn=document.querySelectorAll("input[name='kind']")
let loginForm=document.getElementById('loginForm')

let select

radioBtn.forEach(r => {
    select="student"
    r.addEventListener("change",()=>{
        select=document.querySelector("input[name='kind']:checked").value
    })
})
loginForm.addEventListener("submit" , (e)=>{
        e.preventDefault()
        if(select=="admin"){
            emailAdmin.map((i)=>{
                if(email.value==i.email && pass.value==i.pass){
                    document.location.href="../admin.html"
                }
            })
        }
        else if(select=="student"){
            emailStudent.map((i)=>{
                if(email.value==i.email && pass.value==i.pass){
                    document.location.href="../student.html"
                    console.log(select)
                }
            })
        }
        else if(select=="doctor"){
            emailDoctor.map((i)=>{
                if(email.value==i.email && pass.value==i.pass){
                    document.location.href="../doctor.html"
                }
            })
        }
    }
)