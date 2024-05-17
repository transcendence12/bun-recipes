const server = Bun.serve({
    port: Bun.env.PORT || 3000,
    fetch(req){
        return new Response("Nice Bun!");
    },
});

console.log(`Server is running on port${server.port}`)
