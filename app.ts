import "reflect-metadata";
import express from "express";
import connection from "./connection";
import { list, create, update, deleted, get } from "./services/cars";
import { multerUpload } from './utils/multer';


require("dotenv").config();

// -------------------firing express app
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

// -------------------routes
app.get("/cars", list);
app.get("/cars/:id", get);
app.post("/cars",multerUpload.single('image'), create);
app.put("/cars/:id", update);
app.delete("/cars/:id", deleted);

const port = process.env.PORT;
// --------------------Listen
const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}/`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

void start();
