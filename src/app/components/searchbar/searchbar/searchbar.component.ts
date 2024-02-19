import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'search-bar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent  implements OnInit, OnDestroy {

  @Input() initialValue: string = '';
  @Input() debounceTime: number = 300; // delay time

  @Output() textChange = new EventEmitter<string>();

  inputValue = new Subject<string>();

  trigger = this.inputValue.pipe(
    debounceTime(this.debounceTime),
    distinctUntilChanged()
  );

  subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() {
    const subscription = this.trigger.subscribe(currentValue => {
      this.textChange.emit(currentValue);
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onInput(e: any) {
    // change value
    this.inputValue.next(e.target.value);
  }
}
