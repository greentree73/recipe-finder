import { Request, Response } from 'express';
/**
 * Search for recipes by keyword
 * GET /recipes/search?query=chicken&number=10
 */
export declare const searchRecipes: (req: Request, res: Response) => Promise<void>;
/**
 * Get detailed information about a specific recipe
 * GET /recipes/:id
 */
export declare const getRecipeById: (req: Request, res: Response) => Promise<void>;
/**
 * Get a random recipe with optional tag filtering
 * GET /recipes/random?tags=vegetarian&number=1
 */
export declare const getRandomRecipe: (req: Request, res: Response) => Promise<void>;
/**
 * Search for ingredients by keyword
 * GET /recipes/ingredients?query=apple&number=10
 */
export declare const searchIngredients: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=recipeController.d.ts.map