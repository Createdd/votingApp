import aixos from 'aixos';
export const FETCH_ALL_POLLS = 'FETCH_ALL_POLLS';
const ROOT_URL = 'http://localhost:3000/api';

export function fetchAllPolls() {
  const request = aixos.get(`${ROOT_URL}/polls`);
  return { type: FETCH_ALL_POLLS, payload: request };
}
