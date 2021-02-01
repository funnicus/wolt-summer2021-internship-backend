import { Restaurant } from "../types";
import calcDistance from './distanceCalculator';

export const nearbyReastaurants = (lat: number, lon: number, restaurantArray: Restaurant[]): Array<Restaurant> => {

    //comparator function for our sort
    function distanceComparator(a: Restaurant, b: Restaurant): number{
        if(calcDistance(lat, lon, a.location[0], a.location[1]) < 
        calcDistance(lat, lon, b.location[0], b.location[1])){
            return -1;
        }
        else if(calcDistance(lat, lon, a.location[0], a.location[1]) == 
        calcDistance(lat, lon, b.location[0], b.location[1])){
            return 0;
        }
        return 1;
    }

    //sorting
    restaurantArray.sort(distanceComparator);

    return restaurantArray;

};