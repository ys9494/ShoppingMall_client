import {
  addCategoryService,
  getCategoriesService,
} from "../services/categoryService";

export const addCategory = async (req, res, next) => {
  try {
    const { title } = req.body;
    // const { title, description, theme, imageKey } = req.body;

    const newCategory = await addCategoryService({
      title,
      // description,
      // theme,
      // imageKey,
    });
    res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await getCategoriesService();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};
