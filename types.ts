export interface Restaurant {
   blurhash: string;
   location: Array<number>
   name: string;
   online: boolean,
   launch_date: string;
   popularity: number;
}

export interface RestaurantsObj {
    restaurants: Array<Restaurant>;
}

export interface Discovery {
    sections: [
        {
            title: "Popular Restaurants";
            restaurants: Array<Restaurant>;
        },
        {
            title: "New Restaurants";
            restaurants: Array<Restaurant>;
        },
        {
            title: "Nearby Restaurants";
            restaurants: Array<Restaurant>;
        }
    ]
}