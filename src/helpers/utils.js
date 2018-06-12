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
