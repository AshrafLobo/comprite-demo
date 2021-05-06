import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import { EgmsService } from 'src/app/services';

@Component({
  selector: 'app-egm',
  templateUrl: './egm.component.html',
  styleUrls: ['./egm.component.scss'],
})
export class EgmComponent implements OnChanges {
  egmData;
  today = new Date();

  @Input('issuerId') issuerId;

  constructor(private service: EgmsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const issuerId: SimpleChange = changes.issuerId;

    this.service.getAll(issuerId.currentValue).subscribe((resource) => {
      this.egmData = resource;
    });
  }
}
