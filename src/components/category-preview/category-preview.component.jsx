import { Link } from 'react-router-dom';
import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, PreviewTitle, Preview } from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <PreviewTitle to={title}>{title.toUpperCase()}</PreviewTitle>
            </h2>
            <Preview>
                {products.filter((_, index) => index < 4).map((product) => {
                    return (<ProductCard key={product.id} product={product} />);
                })}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
