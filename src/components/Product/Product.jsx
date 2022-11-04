import { useEffect } from "react";
import { useState } from "react";
import "./product.css";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { formatPrice } from "../../utils";

const Product = () => {
  // const { product, loading } = useProduct();
  // console.log(product);
  const [data, setData] = useState([]);
  // const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);
  let componentMouted = true;
  // api

  useEffect(() => {
    const getProducts = async () => {
        // setLoading(true);
      const huyRes = await fetch("v2/huyit");
      if (componentMouted) {
        setData(await huyRes.clone().json());
        data(await huyRes.json());
      }
      // console.log(filter);
      // sau đó và sao đó
      return () => {
        componentMouted = false;
      };
    };
    setLoading(false);
    getProducts();
  }, []);
  


  // Loading nè
  const Loading = () => {
    return (
      <>
        <div className="container mx-auto max-w-[85%]">
          <img src="https://banhang.sieuthicode.net/public/upload/storage/images/gif_loadingHCZ.png" width={100} alt="" />
        </div>
      </>
    );
  };


  // show products

  const ShowProducts = () => {
    return (
      <>
        <div className="container mx-auto max-w-[85%] pb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
            {data.map((items) => {
              return (
                <div
                  key={items.id}
                  className="box-product shadow-sm cursor-pointer rounded-md flex items-center justify-center h-full transition duration-500 hover:scale-105 border-2 border-slate-200 p-1"
                >
                  <div className="card h-full text-center">
                    <NavLink to={`/products/${items.id}`}>
                      <img
                        src={items.imageUrl}
                        width="608"
                        height="380"
                        alt=""
                      />
                    </NavLink>
                    <div className="card-body">
                      <div>
                        <h5 className="card-title BoxProduct-title text-black text-xl pt-3">
                          {items.name}
                        </h5>
                        <font color="red" className="text-lg font-bold">
                          {formatPrice(items.price)} / 10 Năm
                        </font>
                        <p className="card-text text-black">
                          <svg
                            className="svg-inline--fa fa-check-circle w-4 inline"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="check-circle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.7184.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.2774.667-4.705-12.265-4.736-16.97-.069l-22.719 22.5364.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                            ></path>
                          </svg>{" "}
                          {items.description}
                        </p>
                        <p className="card-text text-blue-500 font-bold">
                          Người Bán: {items.seller}
                        </p>
                        <p className="card-text text-red-400-500 text-black font-bold">
                          Lượt Xem: 667 - Tải Về: 26,445
                        </p>
                      </div>
                      <NavLink
                        to={`/products/${items.id}`}
                        className="btn button-blue d-block
                      shadow"
                      >
                        Xem Ngay
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="pt-3">
        <NavLink to={`/products`}>
          <h2 className="text-center font-upper font-bold text-3xl">Tất Cả Sản Phẩm</h2>
        </NavLink>
        <div className="line-bg"></div>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </>
  );
};

export default Product;
