const http = require("http");

// ye require ka use krkai relative path dogai kaha se data chaiye jese import krte hai aisa hi hai 
const requestHandler = require('./handler')
const server = http.createServer(requestHandler)

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
