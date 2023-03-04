import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})

export class CustomButtonComponent {
  @Input() onClickDisable: boolean = false

  onClick(evt: MouseEvent) {
    if (this.onClickDisable)
    {
      (evt.target as HTMLElement).setAttribute('disabled', 'true')
    }
  }
}
