import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../services/storage/storage.service';
import { Storage } from '../../services/storage/storage.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './settings-form.component.html',
  styleUrl: './settings-form.component.scss'
})
export class SettingsFormComponent {
  settings: Storage['settings']
  settingsForm: FormGroup
  constructor(
    private readonly storageService: StorageService,
    private fb: FormBuilder
  ){
    this.settings = storageService.getSettings()

    this.settingsForm = new FormGroup({
      toLanguage: new FormControl(this.settings.toLanguage),
      wordsCount: new FormControl(this.settings.wordsCount),
      time: new FormControl(this.settings.time)
    })
  }

  onSubmit(form: FormGroup) {
    const settings: Storage['settings'] = {
      fromLanguage: 'RU',
      toLanguage: form.value.toLanguage || 'EN',
      wordsCount: Number(form.value.wordsCount) || 10,
      time: Number(form.value.time) || 6000
    }
    this.storageService.setSettings(settings)
  }
}
