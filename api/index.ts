export const config = {
  runtime: 'edge',
};
 
const when = '2023-12-26T17:11:44.687Z'
const key = '8cfdb189e723919be89707bee858bfb8aeb4290936f790b8'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
}

async function fetchWordsapi(w: string) {
  return fetch(`https://www.wordsapi.com/mashape/words/${w}?when=${when}&encrypted=${key}`)
}

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const word = url.searchParams.get('q');

  if (word) {
    const response = await fetchWordsapi(word)
    const json = await response.json()
    return new Response(JSON.stringify(json.results ?? []), {
      headers
    });
  }

  return new Response(JSON.stringify([]), {
    headers,
  });
}
