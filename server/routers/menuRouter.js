import express from "express";
import expressAsyncHandler from "express-async-handler";
import Menu from "../modals/menuModel.js";
import { isAuth, isAdmin } from "../utils.js";

const menuRouter = express.Router();

menuRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || "";
    const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
    const category = req.query.category || "";
    const categoryFilter = category ? { category: category } : {};
    const menu = await Menu.find({ ...nameFilter, ...categoryFilter });
    res.send(menu);
  })
);

menuRouter.post(
  "/createMenu",
  expressAsyncHandler(async (req, res) => {
    try {
      const menu = new Menu({
        image: req.body.image,
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        ingredients: req.body.ingredients,
        price: req.body.price,
      });
      const createdMenu = await menu.save();

      res.status(200).json({
        message: "New Menu Created  Successfully",
        menu: createdMenu,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })
);

menuRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Menu.find({}).distinct("category");
    res.send(categories);
  })
);

menuRouter.get(
  "/popular",
  expressAsyncHandler(async (req, res) => {
    const popularDishes = await Menu.find({});
    res.send(popularDishes);
  })
);

menuRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const menu = await Menu.findById(req.params.id);
    if (menu) {
      const deleteMenu = await menu.deleteOne();
      res.status(200).json({
        message: "Menu Deleted Successfully",
        menu: deleteMenu,
      });
    } else {
      res.status(404).json({ message: "Menu Not Found" });
    }
  })
);

menuRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const menu = await Menu.findById(req.params.id);
      if (menu) {
        menu.image = req.body.image || menu.image;
        menu.name = req.body.name || menu.name;
        menu.category = req.body.category || menu.category;
        menu.description = req.body.description || menu.description;
        menu.ingredients = req.body.ingredients || menu.ingredients;
        menu.price = req.body.price || menu.price;

        const updatedMenu = await menu.save();
        res.status(200).json({
          message: "Menu Updated Successfully",
          menu: updatedMenu,
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
);

menuRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const menu = await Menu.findById(req.params.id);
    if (menu) {
      res.send(menu);
    } else {
      res.status(404).send({ message: "Menu Not Found" });
    }
  })
);

export default menuRouter;
