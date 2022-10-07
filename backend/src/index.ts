import express from "express";
import { MainRouter } from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", MainRouter);

app.listen(port, () => {
  console.log(`Server is up in port ${port}`);
});
