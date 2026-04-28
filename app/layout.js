import Navbar from "../components/navbar";
import "./styles.css";
// Import Bootstrap
import"../styles/custombootstrap.scss";
import BootstrapLoader from "../components/bootstraploader";

// import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Vedic Mud",
  description: "Pure & Natural Brightness and Glow Face Pack",
};

export default function RootLayout({ children }) {
  return (
    <>
    <BootstrapLoader/>
    <html lang="en">
      <body>  
        <Navbar/>
        {children}
      </body>
    </html>
    </>
  );
}
