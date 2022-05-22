import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface HistoryItem {
  address: string;
  materials: Material[];
  date: string;
  price: number;
}

export interface Material {
  name: string;
  weight: number;
  measure: string;
}

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserHistoryComponent {
  historyItems: HistoryItem[] = [
    {
      address: 'Казань, Кремлёвская, 88',
      materials: [
        {
          name: 'Пластик',
          weight: 1,
          measure: 'кг'
        },
        {
          name: 'Стекло',
          weight: 2,
          measure: 'кг'
        },
        {
          name: 'Бумага',
          weight: 25,
          measure: 'кг'
        }
      ],
      date: '25.09.2021',
      price: 1000
    },
    {
      address: 'Казань, проспект Победы, 141',
      materials: [
        {
          name: 'Пластик',
          weight: 1,
          measure: 'кг'
        },
        {
          name: 'Стекло',
          weight: 3,
          measure: 'кг'
        },
        {
          name: 'Бумага',
          weight: 5,
          measure: 'кг'
        }
      ],
      date: '25.09.2021',
      price: 900
    }
  ]
}
