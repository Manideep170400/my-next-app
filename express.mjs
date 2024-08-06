import express from "express";
import cors from "cors";
import mongooseData from "./src/app/BACKEND/mongodb.mjs";
import homeRoutes from "./src/app/BACKEND/api.mjs";

const port = 3030;
const app = express();

app.use(cors());
app.use(express.json());

mongooseData(app);
homeRoutes(app);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
