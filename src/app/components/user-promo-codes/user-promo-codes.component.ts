import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface PromoCode {
  itemId: string;
  isActive: boolean;
  date: string;
  price: number;
}

@Component({
  selector: 'app-user-promo-codes',
  templateUrl: './user-promo-codes.component.html',
  styleUrls: ['./user-promo-codes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPromoCodesComponent {
  promoCodes: PromoCode[] = [
    {
      itemId: 'WddfJfsf7dt6fsHFIuj5пdfsZFuAAAAAAAAAAAA',
      date: '25.09.2021',
      price: 1000,
      isActive: true
    },
    {
      itemId: 'WddfJfsf7dt6fsHFIuj5пdfsZFuAAAAAAAAAAAA',
      date: '25.09.2021',
      price: 100,
      isActive: false
    },
    {
      itemId: 'WddfJfsf7dt6fsHFIuj5пdfsZFuAAAAAAAAAAAA',
      date: '25.09.2021',
      price: 400,
      isActive: false
    }
  ];
}
