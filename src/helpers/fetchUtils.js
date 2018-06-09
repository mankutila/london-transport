import { APP_ID, APP_KEY } from '../app-data'

export const fetchLinesWithRoutes = async (mode) => {
  const url = `https://api.tfl.gov.uk/Line/Mode/${encodeURIComponent(mode)}/Route?app_id=${APP_ID}&app_key=${APP_KEY}`;
  const result = await (await fetch(url));
  return result.json();
}
