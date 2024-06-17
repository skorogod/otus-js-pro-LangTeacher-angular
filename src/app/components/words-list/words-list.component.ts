import { Component } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { WordItem } from '../../services/storage/storage.interface';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-words-list',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './words-list.component.html',
  styleUrl: './words-list.component.scss'
})
export class WordsListComponent {
  words: WordItem[] | null
  constructor(
    private readonly storageService: StorageService
  ){
    this.words = storageService.getWords()
    storageService.obs$
      .subscribe(() => this.words = storageService.getWords())
    console.log(this.words)
  }

  addNewWord(wordItem: WordItem) {
    this.words?.unshift(wordItem)
  }

}
