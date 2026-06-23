// css모듈을 가져와서 이 파일에만 적용
import styles from "./ProductCard.module.css";

// id, name, price, brand 객체 배열인 상품 카드 데이터를 받아서 순회 렌더링 후 반환하는 함수
function RenderCards({ data }) {
  console.log(data); // data 전체 (products = [ {}, {}, {}, ])

  // 받은 데이터에서 각 배열요소인 객체의 각 정보를 받아서 순회하고 cards에 저장
  // 객체 구조 분해 할당 활용했습니다.
  const cards = data.map(({ id, name, price, brand }) => {
    console.log({ id, name, price, brand }); // {id: 0, name: "", price: 0, brand: ""}

    // 이 형식으로 데이터 저장
    return (
      <li key={id}>
        <article className={styles.card}>
          <div className={styles.productThumb}></div>
          <div className={styles.contents}>
            <div className={styles.cardHeader}>
              <h2>{name}</h2>
              <p className={styles.brand}>{brand}</p>
            </div>
            <p className={styles.price}>{price.toLocaleString()}원</p>
          </div>
        </article>{" "}
      </li>
    );
  });

  // 최종적으로 섹션-ul내부에 출력
  return (
    <section className={styles.productList}>
      <ul className={styles.cardGrid}>{cards}</ul>
    </section>
  );
}

// 내보내기
export default RenderCards;
