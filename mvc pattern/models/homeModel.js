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
      home.id = Date.now().toString(); // 🔴 ID added
    homes.push(home);             // new home add
    fs.writeFileSync(filePath, JSON.stringify(homes, null, 2), "utf-8"); // save
};

// Add function
const getHomeById = (id) => {
    const homes = getAllHomes();
    return homes.find(home => home.id === id);
};

const updateHome = (updatedHome) => {
    const homes = getAllHomes();

    const homeIndex = homes.findIndex(
        home => home.id === updatedHome.id
    );

    if (homeIndex === -1) return;

    homes[homeIndex] = updatedHome;

    fs.writeFileSync(
        filePath,
        JSON.stringify(homes, null, 2),
        "utf-8"
    );
};


const deleteHome = (id) => {
    const homes = getAllHomes();

    const updatedHomes = homes.filter(
        home => home.id !== id
    );

    fs.writeFileSync(
        filePath,
        JSON.stringify(updatedHomes, null, 2),
        "utf-8"
    );
};



module.exports = {
    getAllHomes,
    addHome,
    getHomeById,
    updateHome,
    deleteHome  // 🔴 new
};
