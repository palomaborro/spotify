const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;

mongoose.connect("mongodb://localhost:27017/spotify_project", (error, res) => {
  if (error) {
    throw new error();
  } else {
    console.log("Connected to Database");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});
