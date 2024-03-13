import { CanActivateFn } from '@angular/router';

export const isLacturerGuard: CanActivateFn = (route, state) => {
  return sessionStorage.getItem('isL')!=JSON.stringify(false)
};
