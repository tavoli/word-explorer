import {GoogleGenerativeAI} from '@google/generative-ai';

export const config = {
  runtime: 'edge',
};
 
const when = '2023-12-26T17:11:44.687Z'
const key = '8cfdb189e723919be89707bee858bfb8aeb4290936f790b8'
const apiKey = 'AIzaSyCBfcvsu3tvTcyik0pGQBk4xEMOSIrBHXM'

const generationConfig = {
  maxOutputTokens: 1000,
  temperature: 0.9,
};

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'text/plain',
}

async function fetchWordsapi(w: string) {
  return fetch(`https://www.wordsapi.com/mashape/words/${w}?when=${when}&encrypted=${key}`)
}

async function fetchAI(w: string, data: any[]) {
  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-pro', generationConfig })
  const prompt = `
    Refine the provided DATA in relation to the word "${w}" by organizing and presenting the data, incorporating definitions, synonyms, examples, and other pertinent information for a comprehensive understanding:

    DATA: ${JSON.stringify(data)}
  `
  const result = await model.generateContent(prompt)
  const response = result.response
  const text = response.text()
  return text
}

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const word = url.searchParams.get('q');

  if (word) {
    try {
      const response = await fetchWordsapi(word)
      const json = await response.json()
      const data = json.results ?? []

      if (data.length === 0) {
        return new Response('No results', {
          headers,
        });
      }

      const text = await fetchAI(word, data)

      return new Response(text, {
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
