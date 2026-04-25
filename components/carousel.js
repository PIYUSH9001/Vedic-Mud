"use client";
import "../styles/index.css";
import { useEffect } from "react";

export default function Carousel() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      const carouselElement = document.querySelector("#myCarousel");
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 3000,
          ride: "carousel",
          pause: false
        });
      }
    });
  }, []);

  return (
    <div className="container-fluid px-0 vh-100">
      <div
        id="myCarousel"
        className="carousel slide carousel-fade"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-img-wrapper">
              <img src="/images/ProductImage9.jpg" className="d-block w-100 " alt="Product 1" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-wrapper">
              <img src="/images/ProductImage.jpg" className="d-block w-100 " alt="Product 2" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-wrapper">
              <img src="/images/ProductImage7.jpg" className="d-block w-100 " alt="Product 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}