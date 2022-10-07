import { Router } from "express";
import { CollectionsRouter } from "./collections-routes";
import { UsersRouter } from "./users-routes";

const router = Router();

router.use("/collections", CollectionsRouter);
router.use("/users", UsersRouter);

export const MainRouter = router;
