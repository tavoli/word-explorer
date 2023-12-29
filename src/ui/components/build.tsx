import React from "react"

import {
  Antonyms,
  Block,
  Definition,
  Examples,
  Frequency,
  HasTypes,
  Head,
  PartOfSpeech,
  Pronunciation,
  Synonyms,
  TypeOf,
  Word
} from "./Word"

interface Result {
  definition?: string;
  partOfSpeech?: string;
  examples?: string[];
  synonyms?: string[];
  typeOf?: string[];
  hasTypes?: string[];
  antonyms?: string[];
}

interface Content {
  word?: string;
  results?: Result[];
  pronunciation?: string;
  frequency?: number;
}

export function build(content: Content): React.JSX.Element[] {
  const components: React.ReactNode[] = []

  if (content.word) {
    components.push(
      <Head key="head">
        <Word key="word" word={content.word} />
        <Pronunciation key="pronunciation" pronunciation={content.pronunciation} />
        <Frequency key="frequency" frequency={content.frequency} />
      </Head>
    )
  }

  if (content.results) {
    const internalComponents = content.results.map((result, index) => (
      <Block key={index}>
        {result.partOfSpeech && <PartOfSpeech partOfSpeech={result.partOfSpeech} />}
        {result.definition && <Definition definition={result.definition} />}
        {result.examples && <Examples examples={result.examples} />}
        {result.synonyms && <Synonyms synonyms={result.synonyms} />}
        {result.typeOf && <TypeOf typeOf={result.typeOf} />}
        {result.hasTypes && <HasTypes hasTypes={result.hasTypes} />}
        {result.antonyms && <Antonyms antonyms={result.antonyms} />}
      </Block>
    ))

    components.push(
      <React.Fragment key="results">{internalComponents}</React.Fragment>
    )
  }

  return components.map((component, index) => (
    <React.Fragment key={index}>{component}</React.Fragment>
  ))
}
