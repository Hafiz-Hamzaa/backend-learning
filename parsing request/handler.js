// ------ Parsing Request
// Streams - Chunks - Buffer
// Node.js me Streams ka matlab hai data ka continuous flow, jaise paani ki nadi — data ek saath nahi aata, balki chhote chhote pieces, yani Chunks, me aata hai. Ye Chunks is liye important hain taake bada data ek saath memory me load na ho aur server efficiently handle kar sake. Aur Buffer ka kaam hai ye chunks temporarily ek jagah collect karna aur sequence me rakhna, taake pura aur meaningful data mil sake, jaise puzzle ke tukde sahi order me rakh kar complete picture banai jaye.

// ---------- Taking Data from Client and Hanle POST Reqeust and Redirect Request
const fs = require("fs"); // ye filecreate waghera CRUD kai liye use hota hai

const requestHandler =((req, res) => {
  console.log(req.url, req.method);

  // Request URL Based
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" />'
    );
    res.write('<br><input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/success") {
    res.write("Form Submit Successfully");
    return res.end();
  } else if (req.url === "/submit-details" && req.method === "POST") {
    
    // Reading Chunks : yaha per hmara data ka pehla chunk agya
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    // ----------------

    // ----- Buffering chunks : mtlb chnks ko aik jaga collection krna or end me aik final result lena
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      // ----- Parsing Request actual form in the object pehle to string me arha tha ab object me aiga
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {}
      // for(const [key,val] of params.entries()){
      //     bodyObject[key] = val
      //     console.log(bodyObject)
      // }

      // ---- easy method to get parsing request
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      // --------- Ab jo client se data aya usko file opertion krwana mtlb usko file me dekhana
        fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
        // -------------

    });
    // ------------

    // fs.writeFileSync("user.txt", "Hafiz Hamza");
    res.statusCode = 302;
    // res.setHeader('Location','/success')
    res.setHeader("Location", "/"); // redirect krdo / per means Home per
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  res.end();
});


// Modules : mtlb code ko organized krna this is the syntax 
module.exports = requestHandler