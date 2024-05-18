import { Recipe, RecipePreview } from "./types";

export const mapRecipeToRecipePreview = (recipe: Recipe): RecipePreview => ({
    name: recipe.name,
    imageSrc: recipe.imageSrc
})