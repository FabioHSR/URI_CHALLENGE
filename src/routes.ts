import { Router } from "express";
import AnswersController from "./controllers/AnswersController";


const router = Router();

// ----- Início User Routes -----
const answersController = new AnswersController();
// Initial Page
router.get("/", (request, response) => {
  response.send("Welcome to our URI Answers application!")
})

router.get("/exemplo", answersController.exemplo)
router.get("/questao1", answersController.questao1)
router.get("/questao2", answersController.questao2)

export { router };