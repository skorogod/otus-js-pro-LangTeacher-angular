import { Component } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { GoFormComponent } from '../go-form/go-form.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { ViewChild } from '@angular/core';
import { WordItem } from '../../services/storage/storage.interface';

@Component({
  selector: 'app-go',
  standalone: true,
  imports: [GoFormComponent, CommonModule, CountdownComponent],
  templateUrl: './go.component.html',
  styleUrl: './go.component.scss'
})
export class GoComponent {
  constructor(
    private readonly storageService: StorageService
  ) {}

  lastResults = this.storageService.getResults()
  settings = this.storageService.getSettings()
  words = this.storageService.getWords()
  targetDate: number | null = null
  isStarted = false
  tick: number | null = null
  currentWord: WordItem = this.words[Math.floor(Math.random() * this.words.length)]

  config: CountdownConfig = {
    demand: false,
    leftTime: this.settings.time
  }

  @ViewChild('cd', { static: false }) 
  countdown: CountdownComponent | null = null;

  onEvent(event: CountdownEvent) {
    if (event.action === 'done') {
      this.isStarted = !this.isStarted
    }
  }

  onTranslated(res: any) {
    this.lastResults.total++
    if (res) {
      this.lastResults.success++
    } else {
      this.lastResults.mistakes++
    }
    if (this.lastResults.total >= this.settings.wordsCount) {
      this.isStarted=false
    }
    this.currentWord = this.words[Math.floor(Math.random() * this.words.length)]
  }

  onStart() {
    this.isStarted = !this.isStarted
    this.lastResults = {
      total: 0,
      success: 0,
      mistakes: 0
    }
  }

  onStop(stop: boolean) {
    this.isStarted=!stop
    this.countdown?.stop()
  }

  ngOnDestroy() {
    this.countdown?.stop()
  }
}
