interface Role {
  name: string;
  localizedName: string;
}

export interface UserDto {
  id: string;
  photo_url: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phone_number: string;
  password: string;
  balance: number;
  role: Role;
}
