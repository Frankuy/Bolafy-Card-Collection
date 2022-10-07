import { Router } from "express";
import { CollectionsRouter } from "./collections-routes";

const router = Router();

router.use("/collections", CollectionsRouter);

export const MainRouter = router;
