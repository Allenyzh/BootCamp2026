import ProductItem from './productitem';

function ProductList({ products, onDelete }) {
    //接收一堆product

    //{ products, onDelete } 的意思是：

    //“我知道传进来的是一个对象，请帮我直接把里面的 products 和 onDelete 这两个零件拿出来给我用。”
    return (
        <ul className="btn btn-danger">
            {products.map((item) => (
                //每一个打上标签
                <ProductItem
                    key={item.id}
                    product={item}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}

export default ProductList;