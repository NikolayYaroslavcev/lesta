import styles from './product-item.module.css';

interface DescriptionBlockProps {
    description: string;
}

export const DescriptionBlock = ({ description }: DescriptionBlockProps) => (
    <p className={styles.description}>{description}</p>
);


