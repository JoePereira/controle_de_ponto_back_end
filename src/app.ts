import express from "express";
import userRoutes from "@/routes/userRoutes";
import entryRoutes from "@/routes/entryRoutes";
import exitRoutes from "@/routes/exitRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/user", userRoutes);
app.use("/entry", entryRoutes);
app.use("/exit", exitRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default app;
