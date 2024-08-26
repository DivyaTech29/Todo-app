require('dotenv').config();
const express = require('express');
const cors = require('cors');
const tasksRouter = require('./tasks');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
