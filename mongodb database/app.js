// ----------- MongoDB Database (NO SQL)
// What is MongoDB : MongoDB ek modern, fast, flexible NoSQL database hai jo JavaScript apps ke liye perfect hai . isme schema fixed nh hota ham JSON like document me store krte hai . large data handle krne kai liye best hai

// Setting up MongoDB : 
// 🔹 MongoDB Atlas kya hota hai : MongoDB Atlas = Cloud MongoDB . Database aapke laptop par nahi . Balkay online server (cloud) par hota hai .Aap kahin se bhi access kar sakte ho (Node.js, React, etc.) Real world mein 95% companies Atlas use karti hain. MongoDB Atlas ek cloud platform hai jo MongoDB database ko internet par host karta hai

// Step 1 : Create Atlas Account 
// Step 2: Cluster create karna : Cluster = MongoDB ka server jahan database rakha jata hai. Purpose: Ye aapke databases aur collections ko host karega cloud par
// Step 3: Database User create karna : Har cluster ke liye username + password banana padta hai . Ye credentials Node.js / backend connection mein use honge
// Step 4: Network Access (IP whitelist) Cloud database security ke liye Atlas ko pata hona chahiye kaun access kar raha hai . Aapko IP address allow karna hota hai Beginner ke liye: Allow access from anywhere (0.0.0.0/0)
// Step 5: Connection String copy karna : Atlas cluster ready → aapko connection URL milta hai. Purpose: Ye string Node.js ya backend ke saath connect karne ke liye use hoti hai

// Summary of Steps after Account Creation

// Cluster create → server ready
// Database user create → credentials set
// Network access allow → security setup
// Database & collection create → data organize
// Connection string copy → backend ke liye
// Connect backend / Node.js → CRUD operations start


// Installing MongoDB Driver : npm i mongodb and connect mongodb with backend Creating MongoDB Connection
// Install Compass : data manupulate , practice and data visible

// CRUD Methods:

// Create → insertOne(), insertMany()
// Read → find(), findOne()
// Update → updateOne(), updateMany(), $set, $push
// Delete → deleteOne(), deleteMany()