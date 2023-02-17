// import { Card } from './Card'
import { Dispatch } from 'redux';
import { useDispatch } from "react-redux"
import { addToCartThunk } from '../thunks/cart';

interface ProductCardProps {
    product: Product;
    description?: string
}

function ProductCard ({ product, description }: ProductCardProps) {
    const dispatch: Dispatch<any> = useDispatch()

    return (
        <>
            <div className="product-card-container">
                <div className="product-card-header">
                    <h2> {product.name} </h2>
                    <h4> PHP {product.unitPrice} </h4>
                </div>
                <div>
                    <div>
                        <p> {description} </p>
                    </div>
                    <div className="flex-right">
                    <button type="submit" onClick={() =>  dispatch(addToCartThunk(product))} className='btn green'>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
   )
}

export default ProductCard