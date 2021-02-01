import { Restaurant } from "../types";

export const popularRestaurants = (restaurantArray: Restaurant[]): Array<Restaurant> => {

    //comparator function for our sort
    function launchDateComparator(a: Restaurant, b: Restaurant): number{

        if(a.popularity > b.popularity){
            return -1;
        }
        else if(a.popularity === b.popularity){
            return 0;
        }
        return 1;
    }

    //sorting
    restaurantArray.sort(launchDateComparator);

    return restaurantArray;

};