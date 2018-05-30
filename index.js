const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Could not connect to MongoDB..."));

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
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

async function getCourses() {
  const courses = await Course.find({ author: "Charles", isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();

async function updateCourse(id) {
  const course = await Course.findById(id);
  if (!course) return;
  course.isPublished = true;
  course.author = "Another Author";
  const result = await course.save();
  console.log(result);
}

async function removeCourse(id) {
  Course.deleteOne({ _id: id });
}

updateCourse();
