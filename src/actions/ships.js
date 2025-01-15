export const FETCH_SHIPS = 'FETCH_SHIPS';
export const SAVE_SHIPS = 'SAVE_SHIPS';
export const FETCH_SHIP_DETAIL = 'FETCH_SHIP_DETAIL';
export const SAVE_SHIP_DETAIL = 'SAVE_SHIP_DETAIL';

export const fetchShips = () => ({
  type: FETCH_SHIPS,
});

export const saveShips = (param) => ({
  type: SAVE_SHIPS,
  shipsAction: param,
});

export const fetchShipDetail = (slug) => ({
  type: FETCH_SHIP_DETAIL,
  slug,
});

export const saveShipDetail = (param) => ({
  type: SAVE_SHIP_DETAIL,
  shipDetailAction: param,
});
