const PRODUCTS = [
    {
        id: 100,
        name: 'Lamb Chops',
        price: 350,
        image: "https://res.cloudinary.com/dro4xvvnh/image/upload/v1684913419/lambchops_usgvsi.jpg",
        duration: '30 mins',
        description: 'Sizzling lamb chops in a skillet creates a beautiful crust loaded with flavor! Marinating in garlic, rosemary, thyme, and olive oil infuses herbaceous notes and tenderizes the meat for a fast and stunning meal.'
    },
    {
        id: 101,
        name: 'Fruit Cake',
        price: 400,
        image: "https://res.cloudinary.com/dro4xvvnh/image/upload/v1684913521/easyfruitcake_sjp7zi.jpg",
        duration: '40 mins',
        description: 'Fruitcake is a cake made with candied or dried fruit, nuts, and spices, and optionally soaked in spirits. In the United Kingdom, certain rich versions may be iced and decorated.'
    },
    {
        id: 102,
        name: 'Shawarma',
        price: 800,
        image:"https://res.cloudinary.com/dro4xvvnh/image/upload/v1684914293/Shawarma-848x477_pci74k.jpg",
        duration: '30 mins',
        description: 'Indulge in the rich flavors of the Middle East with our delectable Shawarma. Served in a warm, fluffy pita bread or on a platter, our Shawarma is a savory culinary creation that will transport your taste buds to exotic lands.'
    }
    ,
    {
        id: 103,
        name: 'Biriani',
        price: 700,
        image: 'https://res.cloudinary.com/dro4xvvnh/image/upload/v1684914526/0_4wumHkmkVKG38b5l_co1gri.jpg',
        duration: '40 mins',
        description: 'Prepare to embark on a culinary journey fit for royalty with our exquisite Biryani. Originating from the royal kitchens of the Indian subcontinent, Biryani is a fragrant and flavorful rice dish that combines aromatic spices, tender meat, and fragrant basmati rice in perfect harmony.'
    }
    ,
    {
        id: 104,
        name: 'Croissant',
        price: 200,
        image: 'https://res.cloudinary.com/dro4xvvnh/image/upload/v1684930339/shutterstock_574919893_obsj1v.jpg',
        duration: '20 mins',
        description: 'Prepare to be whisked away to the streets of Paris as you savor our Classic French Croissant. Crafted with the utmost precision and dedication to authenticity, this flaky pastry embodies the true essence of French baking..'
    }
    ,
    {
        id: 105,
        name: 'Hot dog',
        price: 110,
        image: 'https://res.cloudinary.com/dro4xvvnh/image/upload/v1684930340/HotDogs20_djzp5c.jpg',
        duration: '20 mins',
        description: 'Indulge in a mouthwatering journey with our Deluxe Hot Dog Sensation, meticulously crafted to satisfy your cravings. This culinary marvel starts with a premium, perfectly grilled all-beef hot dog nestled inside a freshly baked artisanal bun. The bun, delicately toasted to a golden perfection, offers a delightful balance of softness and slight crispiness with every bite..'
    }
    ,
    {
        id: 106,
        name: 'Ice Cream',
        price: 250,
        image: 'https://res.cloudinary.com/dro4xvvnh/image/upload/v1684930343/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3_z8aw4n.jpg',
        duration: '20 mins',
        description: 'Immerse your senses in the first movement of this symphony as you encounter the silky smoothness of our premium, artisanal ice cream base. Made from the finest ingredients, including locally sourced dairy and the purest Madagascar vanilla beans, this velvety creation forms the harmonious foundation of our Symphony of Temptations..'
    }
];

export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

