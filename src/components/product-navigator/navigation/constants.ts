export const navItems = [
    {
        to: "/premium",
        label: "Премиальная",
        params: { isPremium: true, isCollectible: false },
    },
    {
        to: "/collectible",
        label: "Коллекционная",
        params: {isPremium: false, isCollectible: true},
    },
];
