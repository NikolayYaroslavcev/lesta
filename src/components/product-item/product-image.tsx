import styles from './product-item.module.css';

interface Props {
    image: string;
    title: string;
}

export const ProductImage = ({image, title}: Props) => (
    <img src={`/images/vehicles/${image}`} alt={title} className={styles.productImg}/>
);


