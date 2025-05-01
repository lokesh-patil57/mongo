const mongoose = require("mongoose");
main()
  .then((res) => {
    console.log("connection Sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");

}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true,
        maxLength:20
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min:1,
    },
    discount:{
        type:Number,
        default:0
    },
})


const Book = mongoose.model("Book" , bookSchema)

let  book1 = new Book({
    title:"Shamchi aii",
    author: "Sane guruji",
    price: 150,
})

book1.save().then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})