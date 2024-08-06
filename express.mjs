import express from "express";
import cors from "cors";
import mongooseData from "./src/app/BACKEND/mongodb.mjs"; // Ensure correct relative path

const port = 3030;
const app = express();

app.use(cors());
app.use(express.json()); // Use express.json() if parsing JSON

mongooseData(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
