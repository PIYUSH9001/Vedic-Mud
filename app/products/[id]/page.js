import Link from "next/link";
import { ProductsData } from "../page";
import "./styles.css";
import InnerImageZoom from "react-inner-image-zoom";
export default async function ProductPage({params}){
    const {id} = await params;
    const ProductData = ProductsData.find(product => product.id == id);
    return(
        <div className="section bg-secondary">
            <img src={ProductData?.imagesrc}
            className="productImage" 
            />
            <div className="productDetails">
                <h3 className="fw-bold">
                    {ProductData?.title}
                </h3>
                <p>
                    ₹{ProductData?.price}
                </p>
                <p className="productDescription">
                    Something to add here...
                </p>
                <Link href={`products/${id}/contact`} >
                    <button type="button" className="btn btn-success">Contact Us</button>
                </Link>
            </div>
        </div>
    )
}