import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {AuthService} from '@services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  userName = 'Алексей'
  balance = 1000;
  userId = 1;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
