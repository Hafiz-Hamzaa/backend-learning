// ---------- Introduction to SQL (Structured Query Language)

// 1️⃣ What is a Database?
// Database = Ek jagah jahan hum data ko organize karke store karte hain, taki use easily access, manage aur update kar sake.
// Purpose: Data ko structured way me rakhna aur applications me efficiently use karna.

// Types of databases:
// Relational (SQL) → Data tables me store hota hai, strict structure.
// Non-relational (NoSQL) → Data flexible format me store hota hai (JSON, key-value, documents).

// Example:
// Contacts app → Naam, Phone Number, Email → Ye sab structured data hai → Database me store.
// Shopping cart → Product details, quantity, price → Database me store → App use kar sake.

// 2️⃣ Intro to SQL (Relational Database)
// SQL = Structured Query Language
// Relational Database me data tables (rows & columns) me store hota hai.
// Tables: Ek table me similar type ka data store hota hai.
// ✅ Key point: SQL me schema fix hota hai → har row me same columns honge. mtlb agr data users ka hai or agr aik row hamne define krdi yehai to baqi sb usrs kai liye bh wohi structur hoga

// 3️⃣ Intro to NoSQL (Non-relational Database)
// NoSQL = Not Only SQL, flexible database
// Data ko JSON-like documents me store karte hain → Schema flexible hota hai
// Popular NoSQL DB: MongoDB
// Flexible structure → Har document alag ho sakta hai
// Scale easily → Large apps me better performance

// Installing SQL
// SQL Server data ka ghar hai, Workbench (GUI) us ghar ka remote control hai mtlb yeha ham commands likhte hai ham yaha se server se connect hote hai...
// Create a scema on work bench

// Connecting app to db : npm install mysql2 and utils folder kai ander databaseUtil.js banao or uska code likho mysql ka
// Pool = bar bar DB connect karne se bachata hai
// Promise = async-await easy banata hai
// Export = poori app me reuse hota hai

// Next Step Table banana  mtlb schema define krna data ka structure kia rahe ga unki types waghera.....
// Queries mtlb records add kro table me
// phr app me dp.execute se data lao promise return krta ha (DB Se query execute krna)
// In Last Adding DB in Models
//Adding query in Home : db.execute("SELECT * FROM homes")
// Adding Homes in Model : ? = placeholder → secure from SQL injection ----- [this.name, this.location, this.price] → values dynamically bind
// Implement Model using WHERE: WHERE → filter rows ? → dynamic value, safe from SQL injection

// Notes : Table and Queries per focus kro........ || Workbench me direct create krte ho sb cheeze internally commands wo deta hai but manually bh ana chahiye for backend integration khud se


// CRUD and Queries SQL Commands to handle everything using this commands because backend me ham is sb queries ko hi use krte hai

// Database Create : 
// CREATE DATABASE practice_db;
// USE practice_db;

// Create Table :
// CREATE TABLE homes (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     location VARCHAR(100) NOT NULL,
//     price INT NOT NULL
// );

// Insert Info :
// INSERT INTO homes (name, location, price)
// VALUES ('Sea View Apartment', 'Karachi', 50000),
//        ('City Center Flat', 'Lahore', 70000);

// Select and Read Data :
// SELECT * FROM homes;
// SELECT name, price FROM homes;
// SELECT * FROM homes WHERE price > 60000;

// Update :
// UPDATE homes SET price = 75000 WHERE name = 'City Center Flat';

// Delete :
// DELETE FROM homes WHERE id = 1;

// SHOW TABLES;      -- Tables list
// DESCRIBE homes;    -- Table structure
// SELECT * FROM homes; -- All data