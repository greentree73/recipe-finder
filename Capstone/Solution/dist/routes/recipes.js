"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipeController_1 = require("../controllers/recipeController");
const router = (0, express_1.Router)();
/**
 * Recipe routes
 * All routes are under /recipes prefix in main app
 */
// GET /recipes/search?query=chicken&number=10
router.get('/search', recipeController_1.searchRecipes);
// GET /recipes/random?tags=vegetarian
router.get('/random', recipeController_1.getRandomRecipe);
// GET /recipes/ingredients?query=apple
router.get('/ingredients', recipeController_1.searchIngredients);
// GET /recipes/:id
// This route must be last to avoid conflicts with /search and /random
router.get('/:id', recipeController_1.getRecipeById);
exports.default = router;
//# sourceMappingURL=recipes.js.map