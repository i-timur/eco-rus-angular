import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {PromoCode} from '@components/user-promo-codes/user-promo-codes.component';

@Component({
  selector: 'app-user-promo-code',
  templateUrl: './user-promo-code.component.html',
  styleUrls: ['./user-promo-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPromoCodeComponent {
  @Input() promoCode?: PromoCode;
}
