import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})

export class CustomButtonComponent {
  @Input() onClickDisable: boolean = false;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  onClick(evt: MouseEvent) {
    this.clickEvent.emit();
    if (this.onClickDisable)
    {
      (evt.target as HTMLElement).setAttribute('disabled', 'true')
    }
  }
}
