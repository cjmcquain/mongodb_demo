const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Could not connect to MongoDB..."));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);
const course = new Course({
  name: "Node.js Course",
  author: "Charles",
  tags: ["node", "backend"],
  isPublished: true
});
