import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { DividendsService } from 'src/app/services';

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.scss'],
})
export class DividendsComponent implements OnChanges {
  dividendsData;
  today = new Date();

  @Input('issuerId') issuerId;

  constructor(private service: DividendsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const issuerId: SimpleChange = changes.issuerId;

    this.service.getAll(issuerId.currentValue).subscribe((resource) => {
      this.dividendsData = resource;
    });
  }
}
