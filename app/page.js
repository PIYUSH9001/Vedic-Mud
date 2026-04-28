"use client";
import Carousel from "../components/carousel";
import ExploreHeader from "../components/exploreheader";
import useIsMobile from "../customhooks/useismobile";

export default function () {
  const isMobile = useIsMobile();
  return (
    <div className="position-relative h-100">

      {/* Background Carousel */}
      <div className="position-absolute top-0 start-0 w-100 vh-100 z-0 ">
        <Carousel />
      </div>

      {/* Foreground Text */}
      <div className="position-absolute bottom-0 w-100 border border-dark border-1  z-1 bg-transparent-dark p-2 responsive-box d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
        <ExploreHeader
          title={"Step into a wonderful world of age old purity and modern glow."}
        />
      </div>

    </div>
  );
}