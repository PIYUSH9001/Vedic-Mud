import Link from "next/link";

export default function ExploreHeader({ title, description }) {
    return (
        <div className="container-fluid rounded d-flex flex-column align-items-center justify-content-center bg-transparent w-50 p-2 m-1">
            <h2 className="fw-bold text-light text-center my-4">{title}</h2>
            <Link href="/products">
            <button className="btn btn-success">
                Explore Products
            </button>
            </Link>
        </div>
    );
}