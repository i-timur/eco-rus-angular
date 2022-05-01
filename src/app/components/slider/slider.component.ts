import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import SwiperCore, {Autoplay, Navigation, SwiperOptions} from 'swiper';

const _slides = [
  {
    title: 'Сделаем мир чище',
    subtitle: 'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: '../../../assets/images/home/recycle.png',
  },
  {
    title: 'А вы знали...',
    subtitle: 'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: '../../../assets/images/home/plastic.png',
  },
  {
    title: 'Что с масками?',
    subtitle: 'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: '../../../assets/images/home/masks.png',
  },
];

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {

  config: SwiperOptions = {
    navigation: true,
    autoplay: {
      delay: 5000
    }
  };

  slides =  _slides;

  constructor() { }

  ngOnInit(): void {
  }

}
