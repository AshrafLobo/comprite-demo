import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  faqs = [
    {
      question: 'How much does Pay100 cost?',
      answer: 'Pay100+ Costs Ksh 27,724 inclusive of VAT',
    },
    {
      question: 'What do I get for the price I pay?',
      answer:
        'The Price you pay includes; the Pay100+ Payroll Software, installation, and the remaining part of the year of free call in support',
    },
    {
      question: 'What is ALF?',
      answer:
        'ALF stand for Annual License Fee. This is a fee charged to the end user on an annual basis to keep their license up to date as well as allow us to continue to provide you with the best possible service.',
    },
    {
      question: 'Is there a limit to the number of employees I can run?',
      answer:
        'Pay100+ has no limitation on the practical number of employees for which it will process payroll. However, the number may be limited by your processor speed, hard disk capacity etc. A typical computer with a Pentium two processor could easily handle hundreds of thousands of employees.',
    },
    {
      question: 'What Year End Reports does Pay100+ produce?',
      answer:
        'Pay100+ will print your P9, P9A and P10 and P10A year end reports. It will also provide you with month end statutory reports such as the NSSF and NHIF reports.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
