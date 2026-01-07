// -------- Mongooose : MongoDB library
// Mongoose ek ODM (Object Data Modeling) library hai jo Node.js ko MongoDB se connect karti hai aur data ko rules, structure aur safety deti hai.

// 📌 MongoDB → database
// 📌 Node/Express → backend logic
// 📌 Mongoose → beech ka bridge + discipline

// Why we use Mongoose : MongoDB me schema fixed nh hota tha jo mazri hai data inesert krdo mtlb age : '10' isme string bh dalo masla nh hai | Mongoose kehta hai pehle schema ka structure define hoga pehle rules define hogai kai kis type ka data hoga is se hota ye tha kai clean cruud , valdiation proper and safe rules and SQL jaisa discipline

// 🔑 CORE CONCEPTS (ye 5 cheezein yaad rakh lo)

// 1️⃣ Connection
// 2️⃣ Schema
// 3️⃣ Model
// 4️⃣ Document
// 5️⃣ Queries (CRUD)

// 1️⃣ MongoDB se connection (first step)
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/myDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
// Mongoose MongoDB ke sath connection banata hai

// 2️⃣ Schema
const user_Schema = new mongoose.Schema({
  name: String,
  age: Number
});


// 4️⃣ Validation (rules lagana) 🔥
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  age: {
    type: Number,
    min: 18
  },
  email: {
    type: String,
    unique: true
  }
});

// 5️⃣ Model (collection ka controller)
const User = mongoose.model("User", userSchema);
// 📌 MongoDB me automatically users collection ban jati hai

// 6️⃣ Document (actual data)
const user = new User({
  name: "Hamza",
  age: 20,
  email: "hamza@gmail.com"
});

await user.save();

// CRUD Operation
// Create : create
// Read : find , findOne , findById
// Update : updateOne , findByIdAndUpdate
// Delete : deleteOne , findByIdAndDelete