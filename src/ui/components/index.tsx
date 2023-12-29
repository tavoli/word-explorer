import React from 'react';

import styles from "./index.module.css";

export const Head = ({children}) => {
  return (
    <div className={styles.head}>
      {children}
    </div>
  );
}

export const Block = ({children}) => {
  return (
    <div className={styles.block}>
      {children}
    </div>
  );
}

export const PartOfSpeech = ({partOfSpeech}) => {
  return (
    <span className={styles.partOfSpeech}>
      {partOfSpeech}
    </span>
  );
}

export const Word = ({word}) => {
  return (
    <div className={styles.word}>
      {word}
    </div>
  );
}

export const Antonyms = ({antonyms}) => {
  return (
    <div className={styles.antonyms}>
      Antonyms:
      <ul>
        {antonyms.map((antonym, index) => (
          <li key={index}>{antonym}</li>
        ))}
      </ul>
    </div>
  );
}

export const Definition = ({definition}) => {
  return (
    <div className={styles.definition}>
      <p>{definition}</p>
    </div>
  );
}

export const Synonyms = ({synonyms}) => {
  return (
    <div className={styles.synonyms}>
      Synonyms:
      <ul>
        {synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    </div>
  );
}

export const TypeOf = ({typeOf}) => {
  return (
    <div className={styles.typeOf}>
      Type of:
      <ul>
        {typeOf.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  );
}

export const HasTypes = ({hasTypes}) => {
  return (
    <div className={styles.hasTypes}>
      Has types:
      <ul>
        {hasTypes.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </div>
  );
}

export const Examples = ({examples}) => {
  return (
    <div className={styles.examples}>
      Examples:
      <ul>
        {examples.map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ul>
    </div>
  );
}


export const Pronunciation = ({pronunciation}) => {
  return (
    <div className={styles.pronunciation}>
      {pronunciation.all && <span>/{pronunciation.all}/</span>}
      {pronunciation.noun && <span>[noun: /{pronunciation.noun}/]</span>}
      {pronunciation.verb && <span>[verb: /{pronunciation.verb}/]</span>}
      {pronunciation.adjective && <span>[adjective: /{pronunciation.adjective}/]</span>}
      {pronunciation.adverb && <span>[adverb: /{pronunciation.adverb}/]</span>}
    </div>
  );
}

export const Frequency = ({frequency}) => {
  return (
    <div className={styles.frequency}>
      {frequency}/7
    </div>
  );
}

