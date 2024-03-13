import { CanActivateFn } from '@angular/router';
import { User } from './models/user.model';

export const usConnectGuard: CanActivateFn = (route, state) => {
  console.log(sessionStorage.getItem('user')!, " user is connect");
  
  return (sessionStorage.getItem('user')!)!=JSON.stringify(new User());
};
