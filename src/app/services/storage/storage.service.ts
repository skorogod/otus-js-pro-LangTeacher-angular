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
      results: {
        success: 0,
        mistakes: 0,
        total: 0
      },
      settings: {
        fromLanguage: "RU",
        toLanguage: "EN",
        wordsCount: 10,
        time: 60
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
      return []
    }
  }

  getSettings(): Storage['settings'] {
    const storage = this.getStorage()
    if (storage && storage.settings) {
      return storage.settings
    }
    else {
      return ({
        fromLanguage: "RU",
        toLanguage: "EN",
        wordsCount: 10,
        time: 60
      })
    }
  }

  getResults(): Storage['results'] {
    const storage = this.getStorage()
    if (storage) {
      return storage.results
    }
    else {
      return ({
        success: 0,
        mistakes: 0,
        total: 0
      })
    }
  }

  addWord(word: string, translation: string) {
    let storage = this.getStorage()
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

  setSettings(settings: Storage['settings']) {
      let storage = this.getStorage()
      if (storage) {
        storage.settings = settings;
      } else {
        storage = this.createStorage()
        storage.settings = settings
      }
      localStorage.setItem('langteach', JSON.stringify(storage))
  }
}
