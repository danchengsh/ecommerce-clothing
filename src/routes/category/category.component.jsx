import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoryTitle, CategoryContainer } from './category.styles.jsx';

const GET_CATEGORY = gql`
    query($title: String!) {
        getCollectionsByTitle(title: $title) {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const Category = () => {
    const { category } = useParams();
    // const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    const { loading, error, data }= useQuery(GET_CATEGORY);
    
    useEffect(() => {
        if (data) {
            const {
                getCollectionsByTitle: {
                    items
                }
            } = data;
            setProducts(items);
        }
    }, [category, data]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products && products.map((product) => (<ProductCard key={product.id} product={product} />))}
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;