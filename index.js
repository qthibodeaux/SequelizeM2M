const express = require("express");
const helmet = require("helmet");

const port = 4000;
 
const app = express();

const Routes = require('./routes/index')
 
app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
 
app.get("/", (req, res) => {
  res.send("Hello World!");
});
 
app.use('/h', Routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
