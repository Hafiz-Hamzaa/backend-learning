const http = require("http");

const navCode = () => {
  return `
    <html>
    <head>
      <title>Simple Navbar</title>
    </head>
    <body style="margin:0; font-family:Arial, sans-serif;">

      <nav style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:15px 40px;
        background-color:#111;
      ">
        <div style="
          color:white;
          font-size:22px;
          font-weight:bold;
        ">
          MyShop
        </div>

        <ul style="
          list-style:none;
          display:flex;
          gap:30px;
          margin:0;
          padding:0;
        ">
          <li><a href="/" style="color:white;">Home</a></li>
          <li><a href="/men" style="color:white;">Men</a></li>
          <li><a href="/women" style="color:white;">Women</a></li>
          <li><a href="/kids" style="color:white;">Kids</a></li>
        </ul>
      </nav>
  `;
};

const server = http.createServer((req, res) => {
  res.write(navCode());

  if (req.url === "/") {
    res.write(`<h1>Welcome to Home Page</h1>`);
  } else if (req.url === "/men") {
    res.write(`<h1>Welcome to Men's Collection</h1>`);
  } else if (req.url === "/women") {
    res.write(`<h1>Welcome to Women's Collection</h1>`);
  } else if (req.url === "/kids") {
    res.write(`<h1>Welcome to Kid's Collection</h1>`);
  } else {
    res.write(`<h1>Page Not Found</h1>`);
  }

  res.end(`</body></html>`);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
