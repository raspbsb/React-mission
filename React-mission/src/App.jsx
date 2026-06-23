import "./App.css";
import RenderCards from "./components/CardList.jsx";

// 상품 데이터
const products = [
  { id: 1, name: "무선 키보드", price: 39000, brand: "EZTECH" },
  { id: 2, name: "무선 마우스", price: 29000, brand: "EZTECH" },
  { id: 3, name: "모니터", price: 199000, brand: "EZTECH" },
  { id: 4, name: "모니터", price: 199000, brand: "EZTECH" },
  { id: 5, name: "모니터", price: 199000, brand: "EZTECH" },
  { id: 6, name: "모니터", price: 199000, brand: "EZTECH" },
  { id: 7, name: "모니터", price: 199000, brand: "EZTECH" },
  { id: 8, name: "모니터", price: 199000, brand: "EZTECH" },
  { id: 9, name: "모니터", price: 199000, brand: "EZTECH" },
];

function App() {
  return (
    <div className="wrapper">
      {/* 가져온 RenderCards 함수에 매개변수 data의 인수로 상품 데이터 전체를 넣고 돌려 */}
      {/* 상품 카드 데이터를 받아서 순회 렌더링 후 반환하는 함수 */}
      <RenderCards data={products} />
    </div>
  );
}

export default App;
