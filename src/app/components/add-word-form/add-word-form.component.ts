import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddWordService } from '../../services/add-word/add-word.service';

@Component({
  selector: 'app-add-word-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-word-form.component.html',
  styleUrl: './add-word-form.component.scss',
})
export class AddWordFormComponent {
  wordForm = new FormGroup({
    word: new FormControl(''),
  });

  constructor(
    private readonly addWordService: AddWordService
  ){}

  @Output()
  submit: EventEmitter<string> = new EventEmitter()

  onSubmit(form: any) {
    this.addWordService.addWord(form.value.word)
  }
}
