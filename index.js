const mongoose=require("mongoose");
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


const userSchema=new  mongoose.Schema({
    name:String,
    email:String,
    age: Number,
});

const User=mongoose.model("User",userSchema);

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// });

// user1.save();

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 47 }
// ]).then((res) => {
//   console.log(res);
// });


// User.findById("683863f2c7891ddfd1115051")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// User.updateMany(
//   { age:{$gt:45} },{ age: 35 } 
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteOne({ name:"Bruce" })
//   .then((res) => {
//     console.log(res);
//   })

