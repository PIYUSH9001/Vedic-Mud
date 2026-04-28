import ProductCard from "../../components/productcard";

export default function () {

  const productsArray = [
    {
      id: "1",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage7.jpg",
      price: 100
    },
    {
      id: "2",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage8.jpg",
      price: 100
    },
    {
      id: "3",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage5.jpg",
      price: 200
    },
    {
      id: "4",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage3.jpg",
      price: 350
    },
    {
      id: "5",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage4.jpg",
      price: 50
    },
  ]

  return (
    <div className="container min-vh-100 py-3 bg-secondary">
      <div className="row g-4 g-md-4">
        {productsArray.map((productDetails) => (<ProductCard key={productDetails.id} product={productDetails} />))}
      </div>
    </div>
  )
}