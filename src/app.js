const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register =require("./models/registers")
const Masseges =require("./models/contucts")

const port = process.env.PORT || 5000;

// this is for statice
const static_path = path.join(__dirname, "../public"); 
app.use(express.static(static_path)) ;
// console.log(path.join(__dirname, "../pulic"));


 const template_path = path.join(__dirname, "../templates/views");
 const partials_path = path.join(__dirname, "../templates/partials");



app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req, res) => {
    res.render("index");
})

app.get("/contuct",(req, res) => {
    res.render("contuct");
})

app.post("/contuct", async(req, res) => {
    try{

         const massegeus = new Masseges({
            name: req.body.name,
            email: req.body.email,
            Massege:req.body.textarea

         })   

         const contuc = await massegeus.save();
         res.status(201).render("index");


    }catch(err){
        res.status(400).send(err);
    }
   
})

app.get("/register",(req, res) => {
    res.render("register");
})

app.post("/register", async(req, res) => {
    try{
        //password varification
         const pasword = req.body.password;
         const cpasword = req.body.cpassword;

         if(pasword === cpasword){
            const registerempl = new Register({
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                password:pasword,
                Cpassword:cpasword
    
             })  
             const register = await registerempl.save();
             res.status(201).render("index");
        }else{
            res.send("password is not match");
         }


    }catch(err){
        res.status(400).send(err);
    }
   
})

app.listen(port, () =>{
    console.log(`servr is running at port ${port}`)
})

