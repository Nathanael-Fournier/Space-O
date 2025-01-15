export const FETCH_PILOT_DETAIL = 'FETCH_PILOT_DETAIL';
export const SAVE_PILOT_DETAIL = 'SAVE_PILOT_DETAIL';

export const fetchPilotDetail = (slug) => ({
  type: FETCH_PILOT_DETAIL,
  slug,
});

export const savePilotDetail = (param) => ({
  type: SAVE_PILOT_DETAIL,
  pilotDetailAction: param,
});
