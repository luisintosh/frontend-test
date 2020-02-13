import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {
  @Input() inputValue: string;
  // emmit search input value on submit form
  @Output() submitSearch = new EventEmitter<string>();

  constructor() {}

  onSubmit() {
    this.submitSearch.emit(this.inputValue);
  }
}
