import { useState } from "react";

// 상품 데이터 양식 설정
const product = { name: "무선 키보드", price: "39000", brand: "EZTECH" };
// 상품 데이터 객체의 속성 각각을 변수로 설정
const { name, price, brand } = product;

// 카드 저장 : 이름, 가격, 브랜드의 3개 정보를 가진 HTML구조 저장
function ProductCard({ name, price, brand }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{brand}</p>
    </div>
  );
}

// 저장된 카드 렌더링
function CardList() {
  return (
    <div>
      <ProductCard />
      <ProductCard name="무선 키보드" price="39000" brand="EZTECH" />
      <ProductCard name="마우스" price="25000" brand="CJSK" />
      <ProductCard name="스피커" price="67000" brand="EZTECH" />
    </div>
  );
}

export default CardList;
