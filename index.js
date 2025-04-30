const mongoose = require("mongoose");
main()
  .then((res) => {
    console.log("connection Sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

}

const newSchema = new mongoose.Schema ({
    name: String,
    email:String,
    age:Number,
})

const User = mongoose.model("User" , newSchema)

// find method
User.find({age : {$gt:20}}).then((res)=>{
  console.log(res);
  
})
.catch((err)=>{
  console.log(err);
  
})

// insert one
// const User1 = new User({
//     name : "bhavya",
//     email : "bhavesh729@gmail.com",
//     age: 19,
// })
// const User2 = new User({
//     name : "Lucky",
//     email : "luckypatil@gmail.com",
//     age: 19,
// })

// User1.save().then((res) =>{
//     console.log(res)
    
// })
// .catch((err) =>{
//     console.log(`Error`)
    
// })
// User2.save().then((res) =>{
//     console.log(res)
    
// })
// .catch((err) =>{
//     console.log(`Error`)
    
// })


// Insert Many
// User.insertMany([
//     {name : "tony" , email : "tony@gmail.com" , age:50},
//     {name : "thor" , email : "thor@gmail.com" , age:49},
// ]).then((res) =>{
//     console.log(res);
    
// })