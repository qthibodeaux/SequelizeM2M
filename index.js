const express = require("express");
const helmet = require("helmet");

const port = 4000;
 
const app = express();

const userRoutes = require('./routes/UserRoute')
const postRoutes = require('./routes/PostRoute')
const groupRoutes = require('./routes/GroupRoute')
 
app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
 
app.get("/", (req, res) => {
  res.send("Hello World!");
});
 
app.use('/user', userRoutes)
app.use('/post', postRoutes)
app.use('/group', groupRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
