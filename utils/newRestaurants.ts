import { Restaurant } from "../types";

export const newRestaurants = (restaurantArray: Restaurant[]): Array<Restaurant> => {

    //comparator function for our sort
    function launchDateComparator(a: Restaurant, b: Restaurant): number{
        const val = (new Date(b.launch_date).getTime() - new Date(a.launch_date).getTime());

        if(val < 1){
            return -1;
        }
        else if(val == 0){
            return 0;
        }
        return 1;
    }

    //sorting
    restaurantArray.sort(launchDateComparator);

    return restaurantArray;

};