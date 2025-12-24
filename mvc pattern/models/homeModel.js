// // In-memory "database"
// let homes = [];

// // Model functions
// const getAllHomes = () => {
//     return homes;
// };

// const addHome = (home) => {
//     homes.push(home);
// };

// module.exports = {
//     getAllHomes,
//     addHome
// };


const fs = require("fs");
const path = require("path");

// JSON file path
const filePath = path.join(__dirname, "../data/homes.json");

// Read all homes from file
const getAllHomes = () => {
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
};

// Add home and save to file
const addHome = (home) => {
    const homes = getAllHomes(); // current homes
    homes.push(home);             // new home add
    fs.writeFileSync(filePath, JSON.stringify(homes, null, 2), "utf-8"); // save
};

module.exports = {
    getAllHomes,
    addHome
};
