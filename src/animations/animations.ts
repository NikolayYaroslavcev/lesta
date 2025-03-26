export const slideInAnimation = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};




export const ProductItemAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.5 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
};
