export const config = {
  runtime: 'edge',
};
 
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
}

async function fetchWordsapi(w: string) {
  return fetch(`https://www.wordsapi.com/mashape/words/${w}?when=2023-12-26T17:11:44.687Z&encrypted=${process.env.API_KEY}`)
}

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const word = url.searchParams.get('q');

  if (word) {
    try {
      const response = await fetchWordsapi(word)
      const json = await response.json()
      return new Response(JSON.stringify(json), {
        headers,
      });
    } catch (e) {
      console.error(e)
      return new Response(e.message, {
        headers,
      });
    }
  }

  return new Response('No word provided', {
    headers,
  });
}
