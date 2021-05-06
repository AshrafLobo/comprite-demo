import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { AgmsService } from 'src/app/services';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss'],
})
export class AgmComponent implements OnChanges {
  agmData;
  today = new Date();

  @Input('issuerId') issuerId;

  constructor(private service: AgmsService) {}
  ngOnChanges(changes: SimpleChanges): void {
    const issuerId: SimpleChange = changes.issuerId;

    this.service
      .getAll(issuerId.currentValue)
      .subscribe((resource) => (this.agmData = resource));
  }
}
