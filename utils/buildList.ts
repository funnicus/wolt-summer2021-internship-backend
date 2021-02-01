import { Restaurant } from "../types";

export default function buildList(restaurants: Restaurant[]): Restaurant[] {

    const ten: Restaurant[] = [];  

    //making the final array of nearby restaurants length of ten or less
    for(let i = 0; i < restaurants.length; i++){
        if(i > 10) break;
        ten.push(restaurants[i]);
    }

    return ten;
}