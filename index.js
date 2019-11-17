const express = require("express");
const app = express();

// app.get()
// app.post()
// app.put()
// app.delete()

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
