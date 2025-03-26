import styles from 'components/product-item/product-item.module.css';

interface Props {
    imagePatch: string;
    title: string;
}

export const ProductImage = ({imagePatch, title}: Props) => (
    <img src={`/images/vehicles/${imagePatch}`} alt={title} className={styles.productImg}/>
);


