//This function takes in latitude and longitude of two location and returns the distance between them as a straight line (in km)
export default function calcDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // km
    const dLat = toRad(lat2-lat1);
    const dLon = toRad(lon2-lon1);
    const latFirst = toRad(lat1);
    const latSecond = toRad(lat2);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(latFirst) * Math.cos(latSecond);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(value: number): number {
        return value * Math.PI / 180;
}