export function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getCoordArrayFromStr (str = '') {
  if (!str) return null;
  return str.slice(3, -3).split('],[').map((item) => {
    return {
      lng: parseFloat(item.split(',')[0]),
      lat: parseFloat(item.split(',')[1])
    };
  });
}

function formatTime(time) {
  const hours = '0' + time.getHours();
  const minutes = '0' + time.getMinutes();
  return `${hours.slice(-2)}:${minutes.slice(-2)}`;
}

export function getRightDate(date) {
  const initDate = new Date(date);
  const userTimezoneOffset = initDate.getTimezoneOffset() * 60000;
  return formatTime(new Date(initDate.getTime() + userTimezoneOffset));
}
