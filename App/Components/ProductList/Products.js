const PRODUCTS = [
    {
        id: 100,
        name: 'Black Retractable Belt Stanchion with 3 hooks',
        price: 3500,
        image: require('../../Assets/Images/stage.png'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'Black Retractable Belt Stanchion with 3 hooks',
        price: 6000,
        image: require('../../Assets/Images/light2.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'Black Retractable Belt Stanchion with 3 hooks',
        price: 2000,
        image: require('../../Assets/Images/light3.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
    ,
    {
        id: 103,
        name: 'Black Retractable Belt Stanchion with 3 hooks',
        price: 7000,
        image: require('../../Assets/Images/light4.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];

export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}