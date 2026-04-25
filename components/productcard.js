export default function ProductCard({ imageSource, title, price }) {
    return (
        <div className="col-6 col-md-3 col-lg-4">
            <div className="card h-100">
                <img src={imageSource} className="card-img-top d-block" alt={title} />
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">₹{price} /-</p>
                    <a href={` /products/${title}`}>
                    <button type="button" className="btn btn-success">Buy Now</button>
                    </a>
                </div>
            </div>
        </div>
    )
}