import { CartItemContainer, CartItemImage, ItemDetails, CartItemName } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name} />
            <ItemDetails>
                <CartItemName>{name}</CartItemName>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;
