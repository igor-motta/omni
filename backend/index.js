const express = require("express");

const app = express();

app.post("/plants", (request, response) => {
  const params = request.query;
  console.log(params);
  return response.json({
    message: "Hello World!"
  });
});

app.listen(8801);
