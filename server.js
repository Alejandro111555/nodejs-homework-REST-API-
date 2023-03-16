<<<<<<< Updated upstream
const mongose = require("mongoose");

const app = require("./app");

const { DB_HOST } = process.env;

mongose.set("strictQuery", true);

mongose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => {
    console.log(error.message);
=======
const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((err) => {
    console.log(err.message);
>>>>>>> Stashed changes
    process.exit(1);
  });
