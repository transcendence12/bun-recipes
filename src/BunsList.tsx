import React, { useEffect, useState } from "react";
import { RecipeList } from "./types";

export const BunsList = () => {

    const [recipes, setRecipes] = useState<RecipeList>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/buns");
            const data = (await response.json()) as RecipeList;
            setRecipes(data)
        };
        fetchData();

    }, [])

    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.slug}>
                    <h2>
                    {recipe.name}
                    </h2>
                    <img width={320} src={recipe.imageSrc} alt={recipe.name} />
                </div>
            ))}
        </div>
    )
}