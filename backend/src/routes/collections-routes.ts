import { Router } from "express";
import collections from "../data/collections";

const router = Router();

router.get("/", (req, res, next) => {
  return res.json(collections);
});

export const CollectionsRouter = router;
