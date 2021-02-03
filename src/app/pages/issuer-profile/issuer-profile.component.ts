import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssuersService } from 'src/app/services';

@Component({
  selector: 'app-issuer-profile',
  templateUrl: './issuer-profile.component.html',
  styleUrls: ['./issuer-profile.component.scss'],
})
export class IssuerProfileComponent implements OnInit {
  opened = false;
  issuer;

  constructor(
    private route: ActivatedRoute,
    protected service: IssuersService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let issuer_url = params.get('issuer_name');
      this.issuer = this.service.getIssuer(issuer_url);

      // console.log('Issuer', this.issuer);
    });
  }
}
