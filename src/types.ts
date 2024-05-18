export type Ingredient = string;

export type Instruction = string;

export interface Recipe {
    name: string;
    slug: string;
    country: string;
    description: string;
    imageSrc: string;
    ingredients: Ingredient[];
    instruction: Instruction[]
}
export interface RecipePreview {
    name: string;
    imageSrc: string;
}
export type RecipeList = Recipe[]