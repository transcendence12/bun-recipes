const server = Bun.serve({
    port: Bun.env.PORT || 3000,
    fetch(req){
        const url = new URL(req.url);
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
