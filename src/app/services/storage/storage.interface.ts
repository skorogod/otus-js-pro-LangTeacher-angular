export type Language = 'RU' | "EN"
  
  export type Storage = {
    settings: {
      fromLanguage: Language | null,
      toLanguages: Language | null,
      wordsCount: number | null
      time: number | null
    },
    words: WordItem[]
  }
  
  export type WordItem = {
    id: number,
    word: string,
    translation: string
  }