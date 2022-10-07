import { Router } from "express";
import collections from "../data/collections";
import users from "../data/users";
import { Purchase } from "../interfaces/purchase-interface";
import getMultipleRandom from "../utils/get-multiple-random";
import { Card } from "../interfaces/card-interface";

const router = Router();

router.post("/", (req, res, next) => {
  let { username, collectionId }: Purchase = req.body;
  console.log(req);
  const user = users.find((u) => u.username == username);
  const collection = collections.find((c) => c.id == collectionId);
  if (user == null) {
    return res.status(404).json({
      errors: [{ field: "username", error: "User not found" }],
    });
  }
  if (collection == null) {
    return res.status(404).json({
      errors: [{ field: "collection", error: "Collection not found" }],
    });
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
