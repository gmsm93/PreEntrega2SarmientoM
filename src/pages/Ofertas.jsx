import React from "react";
import { collection, getDocs, getFirestore, query, where, doc } from "firebase/firestore";
import { Card, Loader } from "../components";

export const Ofertas = () => {
  const [loading, setLoading] = React.useState(true);
  const [productData, setProductData] = React.useState([]);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    const db = getFirestore();
    const itemsCollectionFiltered = query(
      collection(db, "products"),
      where("activo", "==", false),
    );
    getDocs(itemsCollectionFiltered)
      .then((products) => {
        if (products.length === 0) {
          setError(true);
        }
        setProductData(
          products.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.log(err))
      .then(() => setLoading(false));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="productos">
      {productData.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}

    </div>
  );
};

