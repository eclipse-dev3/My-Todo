import PRODUCTS from "./data"

export default function table() {
    return (
        <div>
            {PRODUCTS.map((product) => (
                <div key={product.name} className="text-xl">
                    <span className="px-5">
                        {product.stocked ? <span className="text-red-700">{product.name}</span>
                            : <span className="text-white">{product.name}</span>
                        }
                    </span>
                    <span className="text-gray">
                        {product.price}
                    </span>
                </div>
            ))
            }
        </div >
    )
}
