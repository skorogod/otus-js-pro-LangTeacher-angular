import { Injectable } from '@angular/core';
import { Storage, WordItem } from './storage.interface';
import { BehaviorSubject, Subject, Observable, combineLatest, from, map} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  obs$ = new Subject<WordItem | null>()

  createStorage(): Storage {
    return {
      settings: {
        fromLanguage: "RU",
        toLanguages: "EN",
        wordsCount: 10,
        time: 60000
      },
      words: []
    }
  }

  getStorage(): Storage | null {
    const json = localStorage.getItem("langteach")
    if (json) {
      return JSON.parse(json)
    }
    return null;
  }

  getWords() {
    const storage: Storage | null = this.getStorage();
    if (storage) {
      return storage.words
    }
    else {
      return null
    }
  }

  getSettings(): Storage['settings'] | null {
    const storage = this.getStorage()
    if (storage) {
      return storage.settings
    }
    else {
      return null
    }
  }

  addWord(word: string, translation: string) {
    let storage = this.getStorage()
    console.log("STORAGE ", storage)
    if (storage) {
      storage.words.unshift({
        id: storage.words.length,
        word,
        translation
      })
    } else {
      storage = this.createStorage()
      storage.words.unshift(
        {
          id: storage.words.length,
          word,
          translation
        }
      )
    }

    localStorage.setItem('langteach', JSON.stringify(storage))

    this.obs$.next({
      id: storage.words.length,
      word,
      translation
    })
  }
}
