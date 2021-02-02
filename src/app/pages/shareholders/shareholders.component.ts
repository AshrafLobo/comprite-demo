import { Component, OnInit } from '@angular/core';
import { FaqService, IssuersService } from 'src/app/services';

@Component({
  selector: 'app-shareholders',
  templateUrl: './shareholders.component.html',
  styleUrls: ['./shareholders.component.scss'],
})
export class ShareholdersComponent implements OnInit {
  clients;
  faqs;

  constructor(
    private issuersService: IssuersService,
    private faqsServcice: FaqService
  ) {}

  ngOnInit(): void {
    this.clients = this.issuersService.getIssuers();
    this.faqs = this.faqsServcice.getShareRegistryFaqs();
  }
}
