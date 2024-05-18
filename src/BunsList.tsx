import React from "react";
import { RecipeList } from "./types";

interface BunsListProps {
    buns: RecipeList
}

export const BunsList = (props: BunsListProps) => {

    
    return (
        <div>
            {props.buns.map((bun) => (
                <div key={bun.slug}>
                    <h2>
                    {bun.name}
                    </h2>
                    <img width={320} src={bun.imageSrc} alt={bun.name} />
                </div>
            ))}
        </div>
    )
}