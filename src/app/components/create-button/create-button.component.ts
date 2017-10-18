import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ButtonService } from '../../services/button.service';
import { Button } from '../../models/button';
import { ListButtonsComponent } from '../../components/list-buttons/list-buttons.component';


@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.styl'],
  providers: [ButtonService, ListButtonsComponent]
})
export class CreateButtonComponent implements OnInit {
  @Output() onBtnCreated = new EventEmitter<Button>();
  model: any = {};

  ngOnInit() {
  }

  constructor(private buttonService: ButtonService) { }

  onSubmit() {
    this.buttonService.create(new Button(this.model))
      .subscribe(
        (btn) => {
          this.onBtnCreated.emit(btn);
        }
      );
  }

}
