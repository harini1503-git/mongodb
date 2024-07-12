const mongoose = require('mongoose');

main().then(()=>{
    console.log("Connection successful.....");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Schema to make format or structure for your database
const StudentSchema= new mongoose.Schema(
    {
        name: String,
        email: String,
        age: Number,
        marks: Number
    }
)

// model is a mongoose class with which we construct documents.
const students= mongoose.model("students", StudentSchema);

// we use model as a class to create a object to insert data.
const student1= new students({name: "Harini", email: "harinimudaliar1503@gmail.com", age: 21, marks: 97})
const student2= new students({name: "chahna", email: "chahnapatel@gmail.com", age: 21, marks: 98})
const student3= new students({name: "dhruvi", email: "dhruvipatel@gmail.com", age: 21, marks: 99})

student1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

//insert with the help of insertmany function
students.insertMany([
    {
        name: "Mahisha",
        email: "mahishamudaliar2603@gmail.com",
        age: 23,
        marks: 73
    },
    {
        name: "Pradhuyun",
        email: "pradhuyunmudaliar0306@gmail.com",
        age: 18,
        marks: 100
    }
])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

//find method
students.findByIdAndUpdate("669020da0554cfa6395b91ba", {$set: {email: "mahisha2603@gmail.com"}}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})