import axios from 'axios';

export const FETCH_ALL_POLLS = 'FETCH_ALL_POLLS';
export const FETCH_SINGLE_POLL = 'FETCH_SINGLE_POLL';
const ROOT_URL = 'http://localhost:3000/api';

export function fetchAllPolls() {
  const request = axios.get(`${ROOT_URL}/polls`);
  return { type: FETCH_ALL_POLLS, payload: request };
}

export function fetchSinglePoll() {
  const request = axios.get(`${ROOT_URL}/polls/${pollId}`);
  return { type: FETCH_SINGLE_POLL, payload: request };
}
