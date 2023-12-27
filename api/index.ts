export const config = {
  runtime: 'edge',
};
 
const when = '2023-12-26T17:11:44.687Z'
const key = '8cfdb189e723919be89707bee858bfb8aeb4290936f790b8'

async function fetchWordsapi(w: string) {
  return fetch(`https://www.wordsapi.com/mashape/words/${w}?when=${when}&encrypted=${key}`)
}

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const word = url.searchParams.get('q');

  if (word) {
    const response = await fetchWordsapi(word)
    const json = await response.json()
    return new Response(JSON.stringify(json), {
      headers: {'content-type': 'application/json'},
    });
  }

  return new Response(JSON.stringify([]), {
    headers: {'content-type': 'application/json'},
  });
}
