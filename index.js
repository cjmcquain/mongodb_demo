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

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    author: "Charles",
    tags: ["angular", "frontend"],
    isPublished: true
  });
  const result = await course.save();
  console.log(result);
}

createCourse();
