// import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://dummyjson.com/products";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(BASE_URL);
        const result = res.data;
        setProducts(result.products);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  const handleClick = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 5)
      setPage(selectedPage);
  };
  return (
    <div className="App">
      <h1>Products List --{products.length}</h1>
      <div className="products_list">
        {products.slice(page * 5 - 5, page * 5).map((product) => {
          return (
            <div key={product.id} className="product_box">
              <div className="product_details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4>Price : {product.price}</h4>
              </div>
              <div className="product_img">
                <img src={product.thumbnail} alt="Thumbnail" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <span
          onClick={() => {
            handleClick(page - 1);
          }}
        >
          Prev
        </span>
        {[...new Array(products.length / 5)].map((_, i) => {
          return (
            <span
              key={i}
              onClick={() => {
                handleClick(i + 1);
              }}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          onClick={() => {
            handleClick(page + 1);
          }}
        >
          Next
        </span>
      </div>
    </div>
  );
}
