import { Router } from "express";
import { CollectionsRouter } from "./collections-routes";
import { PurchaseRoutes } from "./purchase-routes";
import { UsersRouter } from "./users-routes";

const router = Router();

router.use("/collections", CollectionsRouter);
router.use("/users", UsersRouter);
router.use("/purchase", PurchaseRoutes);

export const MainRouter = router;
