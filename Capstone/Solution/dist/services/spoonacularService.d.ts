import { RecipeSearchResponse, RecipeDetails, RandomRecipeResponse, IngredientSearchResponse } from '../types/recipes';
declare class SpoonacularService {
    private apiKey;
    private baseUrl;
    constructor(apiKey: string);
    /**
     * Search for recipes by keyword
     * @param query - Search term (e.g., "chicken", "pasta")
     * @param number - Number of results to return (default: 10)
     * @returns Promise with recipe search results
     */
    searchRecipes(query: string, number?: number): Promise<RecipeSearchResponse>;
    /**
     * Get detailed information about a specific recipe
     * @param id - Recipe ID
     * @returns Promise with recipe details
     */
    getRecipeById(id: number): Promise<RecipeDetails>;
    /**
     * Get a random recipe with optional tags filter
     * @param tags - Comma-separated tags to filter by (e.g., "vegetarian,dessert")
     * @param number - Number of random recipes to return (default: 1)
     * @returns Promise with random recipe(s)
     */
    getRandomRecipe(tags?: string, number?: number): Promise<RandomRecipeResponse>;
    /**
     * Search for ingredients by keyword
     * @param query - Ingredient search term (e.g., "apple", "tomato")
     * @param number - Number of results to return (default: 10)
     * @returns Promise with ingredient search results
     */
    searchIngredients(query: string, number?: number): Promise<IngredientSearchResponse>;
    /**
     * Handle errors from API calls
     * @param error - The error object
     * @param message - Custom error message
     * @throws Error with formatted message
     */
    private handleError;
}
export default SpoonacularService;
//# sourceMappingURL=spoonacularService.d.ts.map