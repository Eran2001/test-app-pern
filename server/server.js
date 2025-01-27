const express = require("express");
const db = require("./config/db.js");
const usersRoutes = require("./routes/usersRoutes.js");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ urlencoded: false }));

app.get("/api", usersRoutes);

console.log("Hello");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
