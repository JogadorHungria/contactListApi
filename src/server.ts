import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    app.listen(3001, () => {
      console.log("Server is running in port 3001");
    });
  })
  .catch((err) => {
    console.log("Error during Server initialization", err);
  });
