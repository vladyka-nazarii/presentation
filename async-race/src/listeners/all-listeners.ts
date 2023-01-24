import { addCreateListener } from './create-listener';
import { addGarageListeners } from './garage-listener';
import { addToGarageListener, addToWinnersListener } from './menu-listeners';
import { addPaginationListener } from './pagination-listener';
import { addUpdateListener } from './update-listener';

export const addListeners = () => {
  addToGarageListener();
  addToWinnersListener();
  addCreateListener();
  addUpdateListener();
  addGarageListeners();
  addPaginationListener();
};