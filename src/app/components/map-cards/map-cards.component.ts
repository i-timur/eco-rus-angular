import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {DialogService} from '@services/dialog.service';
import {MapCardDetailsComponent} from '@components/map-card-details/map-card-details.component';

interface Card {
  id: number;
  address: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-map-cards',
  templateUrl: './map-cards.component.html',
  styleUrls: ['./map-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapCardsComponent implements OnInit {
  constructor(private dialogService: DialogService) {
  }

  cards: Card[] = [
    {
      id: 0,
      address: 'ул.Кремлёвская, 88',
      text: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторыdsadsadsadsadas',
      image: 'assets/images/map/containers-s.png'
    },
    {
      id: 1,
      address: 'ул.Кремлёвская, 88',
      text: 'Стекло, бумага, металл, старая одежда, батареи',
      image: 'assets/images/map/containers-s.png'
    },
    {
      id: 2,
      address: 'ул.Кремлёвская, 88',
      text: 'Пластик, стекло, бумага, металл',
      image: 'assets/images/map/containers-s.png'
    },
    {
      id: 3,
      address: 'ул.Кремлёвская, 88',
      text: 'Стекло, бумага, металл, старая одежда, батареи',
      image: 'assets/images/map/containers-s.png'
    },
    {
      id: 4,
      address: 'ул.Кремлёвская, 88',
      text: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторыkkadskkadskdasl',
      image: 'assets/images/map/containers-s.png'
    },
    {
      id: 5,
      address: 'ул.Кремлёвская, 88',
      text: 'Пластик, стекло, бумага, металл',
      image: 'assets/images/map/containers-s.png'
    },
    {
      id: 6,
      address: 'ул.Кремлёвская, 88',
      text: 'Пластик, стекло, бумага, металл',
      image: 'assets/images/map/containers-s.png'
    },
  ];

  screenWidth!: number;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  openDetails() {
    if (this.screenWidth > 959) {
      return;
    }
    this.dialogService.openDialog(MapCardDetailsComponent);
  }
}
