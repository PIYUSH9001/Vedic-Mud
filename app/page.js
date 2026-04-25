"use client";
import Carousel from "../components/carousel";
import TextContent from "../components/textcontent";
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
      <div className="position-absolute bottom-0 w-100  z-1 bg-warning p-2 responsive-box d-flex align-items-start" style={{ minHeight: "200vh",borderTopLeftRadius: "1rem",borderTopRightRadius:"1rem" }}>
        <TextContent
          title={"Vedic Mud"}
          description={"Pure & Natural Brightness and Glow Face Packs 100% natural"}
        />
        <TextContent
          title={"Vedic Mud"}
          description={"Pure & Natural Brightness and Glow Face Packs 100% natural"}
        />
      </div>

    </div>
  );
}