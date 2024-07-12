const mongoose = require('mongoose');

main().then(()=>{
    console.log("Connection successful.....");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookschema= new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String
    },
    price: {
        type: Number
    }
});

const books= new mongoose.model("books", bookschema);

books.insertMany([
    {
        title: "Merchant of venice",
        author: "Shakespear",
        price: 800
    },
    {
        title: "Attitude is every thing",
        author: "Unknown",
        price: 765
    }
]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})