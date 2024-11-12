import { Router } from "express";
import { CitiesController } from "./../controllers";

const router = Router();

router.get("/", (req, res) => {
  res.send("API running");
});

router.get(
  "/cities/:id",
  CitiesController.getByIdValidation,
  CitiesController.getById
);
router.get(
  "/cities",
  CitiesController.getAllValidation,
  CitiesController.getAll
);
router.post(
  "/cities",
  CitiesController.createValidation,
  CitiesController.create
);
router.put(
  "/cities/:id",
  CitiesController.updateByIdValidation,
  CitiesController.updateById
);
router.delete(
  "/cities/:id",
  CitiesController.deleteByIdValidation,
  CitiesController.deleteById
);

export { router };
