import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import SwiperCore, {Autoplay, Navigation, SwiperOptions} from 'swiper';
import {Theme} from '@components/slide/slide.component';

interface Slide {
  theme: Theme;
  title: string;
  subtitle: string;
  buttonValue: string;
  buttonTo: string;
  image: string;
}

const _slides: Slide[] = [
  {
    title: 'Сделаем мир чище',
    subtitle: 'Сдай макулатуру или старую одежду и&nbsp;получи скидку на&nbsp;покупку товаров из&nbsp;переработанных материалов',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: '/assets/images/home/recycle.png',
    theme: 'green'
  },
  {
    title: 'А вы знали...',
    subtitle: 'что среднее время разложения пластмассовых изделий колеблется от&nbsp;400 до&nbsp;700&nbsp;лет, а&nbsp;полиэтиленовых пакетов&nbsp;&mdash; от&nbsp;100 до&nbsp;200&nbsp;лет?',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: '/assets/images/home/plastic.png',
    theme: 'orange'
  },
  {
    title: 'Что с масками?',
    subtitle: 'Медицинские маски не&nbsp;обязательно должны становиться отходами. Их&nbsp;тоже можно сдать на&nbsp;переработку.',
    buttonValue: 'Условия сервиса',
    buttonTo: '/',
    image: '/assets/images/home/masks.png',
    theme: 'mint'
  },
];

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {

  config: SwiperOptions = {
    navigation: true,
    autoplay: {
      delay: 5000
    }
  };

  slides =  _slides;
}
