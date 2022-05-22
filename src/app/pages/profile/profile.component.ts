import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '@services/user.service';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  user?: User;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.userService.getUser()?.subscribe((user) => {
      this.user = {
        id: user.id,
        firstName: user.firstname,
        lastName: user.lastname,
        phoneNumber: user.phone_number,
        email: user.email
      };
      this.cdr.markForCheck();
    });
  }

}
