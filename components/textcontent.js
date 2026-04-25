export default function TextContent({ title, description }) {
    return ( 
        <div className="container-fluid rounded d-flex flex-column align-items-center bg-primary w-50 p-2 m-1">
            <h3>{title}</h3>
            <p className="overflow-auto" style={{ maxHeight: "15rem", maxWidth:"10rem"}}>
                {description}
            </p>
        </div>
    );
}