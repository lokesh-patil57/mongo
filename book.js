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
        min:[1 , "Price is too low for Selling"],
    },
    discount:{
        type:Number,
        default:0
    },
    gener :[String]
})


const Book = mongoose.model("Book" , bookSchema)

Book.findByIdAndUpdate("6812f796003d506f644d27f2",{price:-150} ,{runValidators:true}).then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
    
})

// let  book1 = new Book({
//     title:"Marvel Comics",
//     gener:["comics", "fiction", "funny"],
//     price: 150,
// })

// book1.save().then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })