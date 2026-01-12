"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchIngredients = exports.getRandomRecipe = exports.getRecipeById = exports.searchRecipes = void 0;
const spoonacularService_1 = __importDefault(require("../services/spoonacularService"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const service = new spoonacularService_1.default(process.env.SPOONACULAR_API_KEY || '');
/**
 * Search for recipes by keyword
 * GET /recipes/search?query=chicken&number=10
 */
const searchRecipes = async (req, res) => {
    try {
        const { query, number } = req.query;
        // Validate required parameters
        if (!query || typeof query !== 'string') {
            const error = {
                error: 'Bad Request',
                message: 'Query parameter is required and must be a string',
                statusCode: 400,
            };
            res.status(400).json(error);
            return;
        }
        // Parse number parameter
        const resultLimit = number ? Math.min(Math.max(parseInt(number, 10), 1), 100) : 10;
        const results = await service.searchRecipes(query, resultLimit);
        res.json(results);
    }
    catch (error) {
        handleError(res, error);
    }
};
exports.searchRecipes = searchRecipes;
/**
 * Get detailed information about a specific recipe
 * GET /recipes/:id
 */
const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        // Validate recipe ID
        const recipeId = parseInt(id, 10);
        if (isNaN(recipeId)) {
            const error = {
                error: 'Bad Request',
                message: 'Recipe ID must be a valid number',
                statusCode: 400,
            };
            res.status(400).json(error);
            return;
        }
        const recipe = await service.getRecipeById(recipeId);
        res.json(recipe);
    }
    catch (error) {
        handleError(res, error);
    }
};
exports.getRecipeById = getRecipeById;
/**
 * Get a random recipe with optional tag filtering
 * GET /recipes/random?tags=vegetarian&number=1
 */
const getRandomRecipe = async (req, res) => {
    try {
        const { tags, number } = req.query;
        // Parse number parameter
        const resultLimit = number ? Math.min(Math.max(parseInt(number, 10), 1), 10) : 1;
        const tags_str = tags ? tags : undefined;
        const result = await service.getRandomRecipe(tags_str, resultLimit);
        res.json(result);
    }
    catch (error) {
        handleError(res, error);
    }
};
exports.getRandomRecipe = getRandomRecipe;
/**
 * Search for ingredients by keyword
 * GET /recipes/ingredients?query=apple&number=10
 */
const searchIngredients = async (req, res) => {
    try {
        const { query, number } = req.query;
        // Validate required parameters
        if (!query || typeof query !== 'string') {
            const error = {
                error: 'Bad Request',
                message: 'Query parameter is required and must be a string',
                statusCode: 400,
            };
            res.status(400).json(error);
            return;
        }
        // Parse number parameter
        const resultLimit = number ? Math.min(Math.max(parseInt(number, 10), 1), 100) : 10;
        const results = await service.searchIngredients(query, resultLimit);
        res.json(results);
    }
    catch (error) {
        handleError(res, error);
    }
};
exports.searchIngredients = searchIngredients;
/**
 * Helper function to handle errors consistently
 */
const handleError = (res, error) => {
    console.error('Error:', error);
    if (error instanceof Error) {
        const statusCode = error.message.includes('Unauthorized') ? 401 : 500;
        const response = {
            error: 'Internal Server Error',
            message: error.message,
            statusCode,
        };
        res.status(statusCode).json(response);
    }
    else {
        const response = {
            error: 'Internal Server Error',
            message: 'An unexpected error occurred',
            statusCode: 500,
        };
        res.status(500).json(response);
    }
};
//# sourceMappingURL=recipeController.js.map