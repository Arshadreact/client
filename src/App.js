import "./App.css";
// import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel1 from './components/Carousel';
import ControlledCarousel from "./components/Carousel";
import BasicExample from "./components/Card";
import Product4 from "./components/Product";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { SupplementsProvider } from "./SupplementContext";
export const supplements = [
  {
    id: 1,
    name: "Protein Powder",
    price: " ₹29.99",
    description:
      "High-quality whey protein powder for muscle recovery and growth.",
    imgSrc:
      "https://cdn.nutrabay.com/wp-content/uploads/2023/04/NB-ATH-1000-02-01-3-510x510.jpg",
  },
  {
    id: 2,
    name: "Multivitamin Tablets",
    price: " ₹9.99",
    description:
      "A daily dose of essential vitamins and minerals to support overall health.",
    imgSrc:
      "https://cdn.nutrabay.com/wp-content/uploads/2023/04/NB-ATH-1000-02-01-3-510x510.jpg",
  },
  {
    id: 3,
    name: "Pre-Workout Supplement",
    price: " ₹39.99",
    description:
      "Boost your energy and focus before hitting the gym with this pre-workout formula.",
    imgSrc:
      "https://cdn.nutrabay.com/wp-content/uploads/2023/06/NB-NUT-1013-05-01-340x340.jpg",
  },
  {
    id: 4,
    name: "Fish Oil Capsules",
    price: " ₹14.99",
    description:
      "Omega-3 fatty acids for heart and joint health in convenient capsules.",
    imgSrc:
      "https://cdn.nutrabay.com/wp-content/uploads/2023/06/NB-NUT-1013-05-01-340x340.jpg",
  },
  {
    id: 5,
    name: "Creatine Monohydrate",
    price: " ₹19.99",
    description:
      "Pure creatine monohydrate for improved workout performance and muscle strength.",
    imgSrc:
      "https://cdn.nutrabay.com/wp-content/uploads/2023/08/NB-NUT-1030-04-01-510x510.jpg",
  },
  {
    id: 6,
    name: "BCAA Powder",
    price: " ₹24.99",
    description:
      "Branch-chain amino acids (BCAAs) for muscle recovery and reduced muscle soreness.",
    imgSrc:
      "https://cdn.nutrabay.com/wp-content/uploads/2023/08/NB-NUT-1030-04-01-510x510.jpg",
  },
  {
    id: 7,
    name: "Vitamin D3 Supplements",
    price: " ₹12.99",
    description: "Vitamin D3 supplements for bone health and immune support.",
    imgSrc:
      "https://cdn.nutrabay.com/wp-content/uploads/2023/09/NB-ASI-1031-01-01-340x340.jpg",
  },
  {
    id: 8,
    name: "Glucosamine Chondroitin",
    price: " ₹17.99",
    description:
      "Joint support supplements with glucosamine and chondroitin for joint mobility.",
    imgSrc:
      "https://cdn.nutrabay.com/wp-content/uploads/2018/06/NB-MBZ-1015-01-01-340x340.jpg",
  },
  {
    id: 9,
    name: "Probiotic Capsules",
    price: " ₹11.99",
    description: "Probiotic capsules for gut health and digestive support.",
    imgSrc:
      "https://cdn.nutrabay.com/wp-content/uploads/2022/01/NB-OPT-1020-13-01-340x340.jpg",
  },
  {
    id: 10,
    name: "Whey Isolate Protein",
    price: " ₹34.99",
    description: "Fast-absorbing whey isolate protein for lean muscle growth.",
    imgSrc:
      "https://cdn.nutrabay.com/wp-content/uploads/2023/05/NB-NUT-1048-01-01-340x340.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <SupplementsProvider>
        <Navbar />
        <ControlledCarousel />
        <div className="product-grid-container">
          {" "}
          <div className="product-grid">
            {supplements.map((supplement) => (
              <Link to={`/product/${supplement.id}`} key={supplement.id}>
                <BasicExample
                  supplement={supplement}
                  description={supplement.description}
                  price={supplement.price}
                  imgSrc={supplement.imgSrc}
                />
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </SupplementsProvider>
    </div>
  );
}
export default App;
