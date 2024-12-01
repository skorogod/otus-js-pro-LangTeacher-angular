export type Language = 'RU' | "EN"
  
  export type Storage = {
    results: {
        success: number,
        mistakes: number,
        total: number
    }
    settings: {
      fromLanguage: Language,
      toLanguage: Language,
      wordsCount: number
      time: number
    },
    words: WordItem[]
  }
  
  export type WordItem = {
    id: number,
    word: string,
    translation: string
  }