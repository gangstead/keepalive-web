import { Component, OnInit } from '@angular/core';
import { ButtonDataService } from './button-data.service';
import { Button } from './button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  providers: [ButtonDataService]
})
export class AppComponent implements OnInit {
  title = 'keepalive';
  buttons: Button[] = [];

  constructor(private buttonDataService: ButtonDataService) {
  }

  public ngOnInit() {
    this.buttonDataService
      .getButtons()
      .subscribe(
        (bs) => {
          this.buttons = bs;
        }
      );
  }
}
