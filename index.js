const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({ message: "internal server error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://shibilishareef007:5ZjRQ408lsFpxhFP@cluster0.r76r69q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
