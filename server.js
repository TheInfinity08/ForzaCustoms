require("dotenv").config();
const express = require("express");
const cors = require("cors");

const database_connection = require("./config/database_connection");
const errorHandler = require("./middleware/errorHandler");

database_connection();
const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", withCredentials: true }));
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
