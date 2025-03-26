import styles from './product-item.module.css';

interface Props {
    description: string;
}

export const DescriptionBlock = ({ description }: Props) => (
    <p className={styles.description}>{description}</p>
);


