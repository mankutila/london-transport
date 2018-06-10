import { APP_ID, APP_KEY } from '../app-data';

const CREDS = `app_id=${APP_ID}&app_key=${APP_KEY}`;

const fetchData = async (url) => {
  const result = await (await fetch(url));
  return result.json();
}

export const fetchLinesWithRoutes = async (mode) => {
  const url = `https://api.tfl.gov.uk/Line/Mode/${encodeURIComponent(mode)}/Route?${CREDS}`;
  return await fetchData(url);
}

export const searchStops = async (query) => {
  const url = `https://api.tfl.gov.uk/StopPoint/Search/${encodeURIComponent(query)}?${CREDS}`;
  return await fetchData(url);
}
