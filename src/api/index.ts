const data = [
  {id: "1", text: "foo"},
  {id: "2", text: "bar"},
  {id: "3", text: "baz"},
];

Bun.serve({
  async fetch(req: Request) {
    let filtered = data;
    const url = new URL(req.url);
    const search = url.searchParams.get("q")?.toString().toLowerCase();

    if (search) {
      filtered = data.filter((item) => item.text.toLowerCase().includes(search));
    }

    await delay(700);

    return new Response(JSON.stringify(filtered), {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Methods": "GET",
      },
    });
  },
  port: 3000,
});

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
