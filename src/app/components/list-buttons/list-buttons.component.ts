import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../../services/button.service';
import { Button } from '../../models/button';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.styl'],
  providers: [ButtonService]
})
export class ListButtonsComponent implements OnInit {
  buttons: Button[] = [];

  constructor(private buttonService: ButtonService) {
  }

  ngOnInit() {
    this.buttonService
      .getButtons()
      .subscribe((bs) => {
        this.buttons = bs;
      });
  }

  onBtnCreated(btn: Button) {
    this.buttons.push(btn);
  }

}
