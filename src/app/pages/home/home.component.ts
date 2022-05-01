import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export const _homeCards = [
  {
    title: 'Пункты сбора',
    subtitle: 'Посмотри, где в твоем городе можно сдать вторсырье на переработку',
    link: 'map',
    image: '../../../assets/images/home/map.png'
  },
  {
    title: 'ЭкоМаркет',
    subtitle: 'Используй заработанные экокоины для покупки товаров из переработанных материалов',
    link: 'market',
    image: '../../../assets/images/home/market.png'
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  homeCards = _homeCards;

  constructor() { }

  ngOnInit(): void {
  }

}
