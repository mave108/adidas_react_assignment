import "./styles.css";
import { Img } from "./img/index";

const fallback = "https://via.placeholder.com/295x295?text=Image+Not+Available";
const imgSrc = "https://placeimg.com/315/188/nature";
export default function App() {
  return (
    <div className="App">
      <h1>Adidas Assignment</h1>
      <Img src={imgSrc} alt="Adidas" fallback={fallback} />
    </div>
  );
}
