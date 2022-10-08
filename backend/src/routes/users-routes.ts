import { Router } from "express";
import users from "../data/users";

const router = Router();

router.get("/:username/cards", (req, res, next) => {
  const username = req.params.username;
  const user = users.find((u) => u.username == username);
  if (user == null) {
    return res.sendStatus(404);
  }
  return res.json(user?.cards);
});

export const UsersRouter = router;
