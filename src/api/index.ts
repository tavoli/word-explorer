const headers = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
}

const when = '2023-12-26T17:11:44.687Z'
const key = '8cfdb189e723919be89707bee858bfb8aeb4290936f790b8'

function wordAPI(w: string) {
  return fetch(`https://www.wordsapi.com/mashape/words/${w}?when=${when}&encrypted=${key}`)
}

Bun.serve({
  async fetch(req: Request) {
    const url = new URL(req.url)
    const word = url.searchParams.get("q")

    if (word) {
      const response = await wordAPI(word)
      const json = await response.json()
      return new Response(JSON.stringify(json.results ?? []), { headers })
    }

    return new Response(JSON.stringify([]), { headers })
  },
  port: 3000
})
