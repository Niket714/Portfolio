import express from 'express';
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/' , (req,res)=>{
  res.render("home.ejs");
});

app.get("/about" , (req , res)=>{
  res.render("about.ejs");
});

app.get("/skills" , (req , res)=>{
  res.render("skills.ejs");
});

app.get("/education" , (req , res)=>{
  res.render("education.ejs");
});

app.get("/projects" , (req , res)=>{
  res.render("project.ejs");
});

app.get("/experience" , (req , res)=>{
  res.render("experience.ejs");
});

app.get("/contact" , (req , res)=>{
  res.render("contact.ejs");
});

app.listen(port , ()=>{
  console.log(`the server is running on port ${port}`);
});
