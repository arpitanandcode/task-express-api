import express from 'express';
import mainRoutes from "./routes/index.js";

const app = express();

app.use('/api/v1/', mainRoutes);

const PORT = 8989;

app.listen(PORT, () => {
  console.log('App is working on PORT-', PORT);
});