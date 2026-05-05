import Link from "next/link"

export default function ProductCard({product}) {
    
    return (
        <div className="col-6 col-md-3 col-lg-4">
            <div className="card h-100">
                <img src={product.imagesrc} className="card-img-top d-block" alt={product.title} />
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">₹{product.price} /-</p>
                    <Link href={`products/${product.id}/`} >
                    <button type="button" className="btn btn-success">View more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}