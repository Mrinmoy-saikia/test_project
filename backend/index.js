const express = require("express");
const { createTodo, updateTodo } = require("./types");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todos", function (req, res) {
  res.json({
    message: " hi there from backend",
  });
});

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  const { description } = parsedPayload.data;
  console.log(parsedPayload);
  res.json({
    message: description,
  });
});

app.put("/completed", () => {});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
