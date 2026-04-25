import ProductCard from "../../components/productcard";

export default function () {
  return (
    <div className="container min-vh-100 py-3 bg-secondary">
      <div className="row g-4 g-md-4">
        <ProductCard
          imageSource={"../images/ProductImage.jpg"}
          title={"Multani Mitti Pack"}
          price={100}
        />
        <ProductCard
          imageSource={"../images/ProductImage2.jpg"}
          title={"Multani Mitti Pack"}
          price={100}
        />
        <ProductCard
          imageSource={"../images/ProductImage3.jpg"}
          title={"Multani Mitti Pack"}
          price={100}
        />
        <ProductCard
          imageSource={"../images/ProductImage4.jpg"}
          title={"Multani Mitti Pack"}
          price={100}
        />
      </div>
    </div>
  )
}