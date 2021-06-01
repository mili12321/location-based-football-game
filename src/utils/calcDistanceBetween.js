//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
export function calcDistanceBetween(lat1, lon1, lat2, lon2) 
{
  const R = 6371; // km
  const dLat = _toRad(lat2-lat1);
  const dLon = _toRad(lon2-lon1);
  const _lat1 = _toRad(lat1);
  const _lat2 = _toRad(lat2);
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(_lat1) * Math.cos(_lat2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c;
  return d;
}

// Converts numeric degrees to radians
function _toRad(Value) 
{
    return Value * Math.PI / 180;
}