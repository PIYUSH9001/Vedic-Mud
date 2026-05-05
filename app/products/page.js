import ProductCard from "../../components/productcard";

export const ProductsData = [
    {
      id: "1",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage.jpg",
      price: 100
    },
    {
      id: "2",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage2.jpg",
      price: 100
    },
    {
      id: "3",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage3.jpg",
      price: 200
    },
    {
      id: "4",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage4.jpg",
      price: 350
    },
    {
      id: "5",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage5.jpg",
      price: 50
    },
    {
      id: "6",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage6.jpg",
      price: 70
    },
    {
      id: "7",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage7.jpg",
      price: 150
    },
    {
      id: "8",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage8.jpg",
      price: 90
    },
    {
      id: "9",
      title: "Multani Mitti Pack",
      imagesrc: "../images/ProductImage9.jpg",
      price: 20
    },
  ]

export default function () {
  return (
    <div className="container min-vh-100 py-3 bg-secondary">
      <div className="row g-4 g-md-4">
        {ProductsData.map((productDetails) => (<ProductCard key={productDetails.id} product={productDetails} />))}
      </div>
    </div>
  )
}