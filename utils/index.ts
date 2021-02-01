import restaurants from '../restaurants.json';
import { RestaurantsObj, Discovery } from '../types';
import calcDistance from './distanceCalculator';
import buildList from './buildList';
import { nearbyReastaurants } from './nearbyRestaurants';
import { newRestaurants } from './newRestaurants';
import { popularRestaurants } from './popularRestaurants';

const buildDiscovery = (lat: number, lon: number): Discovery => {

    //making arrays of online and ofline restaurants, which are closer than 1.5km away...
    const restaurantsObj = restaurants as RestaurantsObj;

    //online...
    const restaurantsOnline = restaurantsObj.restaurants
    .filter(r => r.online)
    .filter(r => calcDistance(lat, lon, r.location[0], r.location[1]) < 1.5);

    //...and offline
    const restaurantsOffline = restaurantsObj.restaurants
    .filter(r => !r.online)
    .filter(r => calcDistance(lat, lon, r.location[0], r.location[1]) < 1.5);

    const discovery: Discovery = {
        sections: [
            {
                title: "Popular Restaurants",
                restaurants: buildList(popularRestaurants(restaurantsOnline)
                .concat(popularRestaurants(restaurantsOffline)))
            },
            {
                title: "New Restaurants",
                restaurants: buildList(newRestaurants(restaurantsOnline)
                .concat(newRestaurants(restaurantsOffline)))
            },
            {
                title: "Nearby Restaurants",
                restaurants: buildList(nearbyReastaurants(lat, lon, restaurantsOnline)
                .concat(nearbyReastaurants(lat, lon, restaurantsOffline)))
            }
        ]
    };

    return discovery;
};

export default buildDiscovery;