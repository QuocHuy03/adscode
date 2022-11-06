import { useEffect, useState } from "react";
import productApi from "../../Api/productApi";
export default function useProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const huycode = {
          _limit: 10,
        };
        const result = await productApi.getAll(huycode);
        console.log(result);
        setProduct(result);
      } catch (error) {
        console.log("Failed to fetch product", error);
      }
      setLoading(false);
    })();
  },[]);

  return { product, loading };
}
