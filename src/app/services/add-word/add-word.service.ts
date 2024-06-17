import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { from, switchMap, map, tap } from 'rxjs';
import { transition } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AddWordService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly storageService: StorageService
  ) {}

  addWord(words: string) {
    from(words.split(" ")).pipe(
      switchMap(word => this.httpClient.get(`https://api.mymemory.translated.net/get?q=${word}&langpair=ru|en`).pipe(
        tap(res => console.log(res)),
        map((res: any) => ({word, translation: res.responseData.translatedText})),
        tap(res => console.log(res)),
      )
    ),
    ).subscribe((el) => {
      this.storageService.addWord(el.word, el.translation)
    })
  }
}
