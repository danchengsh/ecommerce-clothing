import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div>
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button type="button" buttonType="inverted">Add to Cart</Button>
        </div>
    );
}

export default ProductCard;
