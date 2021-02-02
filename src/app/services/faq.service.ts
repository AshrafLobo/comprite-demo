import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  payrollFaqs = [
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

  shareRegistryFaqs = [
    {
      question: 'What is dividend?',
      answer:
        'A dividend is a share of profits and retained earnings that a company pays out to its shareholders. When a company generates a profit and accumulates retained earnings, those earnings can be either reinvested in the business or paid out to shareholders as a dividend. The annual dividend per share divided by the share price is the dividend yield.',
    },
    {
      question: 'When does a company pay dividends?',
      answer:
        "If a company has excess earnings and decides to pay a dividend to common shareholders, then an amount is declared, in addition to the date when this amount will be paid out to the shareholders. Usually, both the date and the amount is determined on a quarterly basis, after a company finalizes its income statement and the board of directors meets to review the company's financials.",
    },
    {
      question: 'What is my role as a shareholder?',
      answer:
        'The shareholders are the owners of the company and provide financial backing in return for potential dividends over the lifetime of the company. A person or corporation can become a shareholder of a company in three ways:By subscribing to the memorandum of the company during incorporation, By investing in return for new shares in the company,By obtaining shares from an existing shareholder by purchase, by gift or by will. Subscribers are usually the party who initiate the incorporation of a company and automatically become the first shareholders after incorporation. While it is possible for shareholders to transfer their shares, it is also possible for private companies to place restrictions on this process in the articles of the company.',
    },
    {
      question: 'Who are Unclaimed Financial Assets Authority (UFAA)?',
      answer:
        'The Unclaimed Financial Assets Authority (UFAA) is an Authority created under the Unclaimed Financial Assets Act, No. 40 of 2011 to administer unclaimed financial assets. The primary mandate of the Authority is to receive unclaimed financial assets from the holders of such assets, safeguard and re-unite the assets with their rightful owners.',
    },
    {
      question: 'Do I lose my money once it is turned over to the UFAA?',
      answer:
        'You do not lose any financial assets once remitted to UFAA. Indeed, UFAA on behalf of the Government exercise responsibility as holder of assets in the public interest and guarantee you an indefinite right of reunification. Beneficiary should constantly check for the status of deceased relatives.',
    },
    {
      question: 'How do I keep track of my shares?',
      answer:
        'CDSC shall send you monthly statements if your account is active otherwise; you will receive your statement only once a year. However, if you would like to view/download/print your statements, you can visit the CDSC website at www.cdsckenya.com. You can also subscribe to the CDSC mobile services where you will receive an alert every time there is an activity in your accounts such as sale or purchase of shares for a minimum fee of Kshs.10.00 per alert. To subscribe, send the word ‘register’ to 22372 and follow the instructions.',
    },
    {
      question: 'How do I keep track of my shares?',
      answer:
        'CDSC shall send you monthly statements if your account is active otherwise; you will receive your statement only once a year. However, if you would like to view/download/print your statements, you can visit the CDSC website at www.cdsckenya.com. You can also subscribe to the CDSC mobile services where you will receive an alert every time there is an activity in your accounts such as sale or purchase of shares for a minimum fee of Kshs.10.00 per alert. To subscribe, send the word ‘register’ to 22372 and follow the instructions.',
    },
    {
      question: 'What is the CDSC?',
      answer:
        'CDS stands for the Central Depository System. This is a computer system operated by The Central Depository and Settlement Corporation (CDSC) that facilitates holdings of shares in electronic accounts, opened by shareholders and manages the process of transferring shares traded at the Stock Exchange.',
    },
  ];

  getPayrollFaqs() {
    return this.payrollFaqs;
  }

  getShareRegistryFaqs() {
    return this.shareRegistryFaqs;
  }
}
