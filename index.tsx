import React from "react";
import { ReactDOMServerReadableStream, renderToReadableStream } from "react-dom/server.browser";
import { BunsList } from "./src/BunsList";
import { RecipeList } from "./src/types";

const server = Bun.serve({
    port: Bun.env.PORT || 3000,
    async fetch(req){
        const url = new URL(req.url);
        
        
        if (url.pathname === "/app"){
            const buns: RecipeList = await (Bun.file("./data.json").json()) as RecipeList;
            const stream: ReactDOMServerReadableStream = await renderToReadableStream(
                <BunsList buns={buns} />,
              );
              return new Response(stream, {
                headers: { "Content-Type": "text/html" },
              });
        }


    if (url.pathname === "/buns") {
        const buns = Bun.file("./data.json");
        const bunResponse = new Response(buns);
        bunResponse.headers.set("Access-Control-Allow-Origin", "*")
        // console.log(bunResponse)
        return bunResponse
    }
        return new Response("Nice bun!");
    },
});

console.log(`Server is running on port ${server.port}`)
