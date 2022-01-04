import { Router } from "express";

const router = Router()

router.get('/show', (req, res) => {
  console.log(req, "Success");
  res.status(200).send("<p>SUCCESS</p>")
});

export default router;