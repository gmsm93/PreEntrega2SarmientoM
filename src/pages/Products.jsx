import React from "react";
import axios from "axios";
import { ProductsData } from "../json";
import { Card, Loader } from "../components";

async function getAllProducts() {
  return await axios("https://dummyjson.com/products");
}

export const Products = () => {
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getAllProducts()
      .then((res) => {
        setLoading(true);
        setProductsData(res);
      })
      .catch((err) => console.error(err))
      .then(() => setLoading(false));

  }, []);

  if (!loading) {
    console.log(productsData);
  } else {
    console.log("Loading...");
  }

  return loading ? (
    <Loader />
  ) : (
    <div className="productos">
      {ProductsData.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
