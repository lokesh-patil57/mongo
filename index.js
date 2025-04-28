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
    name:statusbar,
    email:String,
    age:Number,
})
