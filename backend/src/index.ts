import express from "express";
import { MainRouter } from "./routes";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/api", MainRouter);

app.listen(port, () => {
  console.log(`Server is up in port ${port}`);
});
