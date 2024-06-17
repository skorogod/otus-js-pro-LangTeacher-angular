import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../services/storage/storage.service';
import { FormGroup, FormControl } from '@angular/forms';
import { WordItem } from '../../services/storage/storage.interface';

@Component({
  selector: 'app-go-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './go-form.component.html',
  styleUrl: './go-form.component.scss'
})
export class GoFormComponent {
  constructor(
    private readonly storageService: StorageService
  ){}
  
  @Input()
  currentWord: WordItem | null = null

  @Output()
  stop = new EventEmitter(false)

  @Output()
  translated = new EventEmitter<boolean>(false)

  goForm = new FormGroup({
    translation: new FormControl('')
  })

  onSubmit(form: FormGroup) {
    if (form.value.translation.toLowerCase().trim() === this.currentWord?.translation.toLowerCase().trim()) {
      this.translated.emit(true)
    }
    else {
      this.translated.emit(false)
    }
  }

  onStop() {
    this.stop.emit(true)
  }
}
