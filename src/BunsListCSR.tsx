import React, { useEffect, useState } from "react";
import { RecipeList } from "./types";
import { BunsList } from "./BunsList";

export const BunsListCSR = () => {

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
        <BunsList buns={recipes} />

    )
}