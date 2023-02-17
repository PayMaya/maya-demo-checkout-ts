import ProductCard from './ProductCard';

function ProductList() {
    return (
        <div className='products-container'>
            {/* PRODUCT CARDS */}
            <ProductCard 
                product={{ name: 'Product 1', unitPrice: 100 }}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum nibh eget orci rhoncus, eu semper metus molestie."
            />
            <ProductCard 
                product={{ name: 'Product 2', unitPrice: 150 }}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum nibh eget orci rhoncus, eu semper metus molestie."
            />
        </div>
    )
}

export default ProductList