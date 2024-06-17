import { Component } from '@angular/core';
import { AddWordFormComponent } from '../add-word-form/add-word-form.component';
import { WordsListComponent } from '../words-list/words-list.component';

@Component({
  selector: 'app-recently-added',
  standalone: true,
  imports: [AddWordFormComponent, WordsListComponent],
  templateUrl: './recently-added.component.html',
  styleUrl: './recently-added.component.scss'
})
export class RecentlyAddedComponent {

}
