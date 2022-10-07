import { Router } from "express";
import collections from "../data/collections";
import users from "../data/users";
import { Purchase } from "../interfaces/purchase-interface";
import getMultipleRandom from "../utils/get-multiple-random";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../interfaces/card-interface";

const router = Router();

router.post("/", (req, res, next) => {
  let { username, collectionId }: Purchase = req.body;
  const user = users.find((u) => u.username == username);
  const collection = collections.find((c) => c.id == collectionId);
  if (user == null || collection == null) {
    return res.sendStatus(404);
  }
  // Get 2 cards random from collection
  const randomCards: Card[] = getMultipleRandom(collection.cards, 2);
  const alreadyHaveCardIds = user.cards.map((c) => c.id);
  user.cards.push(
    ...randomCards.filter((c) => !alreadyHaveCardIds.includes(c.id))
  );
  return res.json(randomCards);
});

export const PurchaseRoutes = router;
