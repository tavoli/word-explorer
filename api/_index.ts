import handler from "."

declare const Bun: any

Bun.serve({
  async fetch(req: Request) {
    return handler(req)
  },
  port: 3000
})
