import { Router } from "express";

import {
  renderTasks,
  createTasks,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);

router.get("/contacto", (req, res) =>{
  res.render('contacto')
})

router.post("/tasks/add", createTasks);

router.get("/edit/:id", renderTaskEdit);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDone);
export default router;
