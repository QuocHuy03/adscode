import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { formatPrice } from "../utils";

const Suggestions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(8);
  let componentMouted = true;
  // api

  useEffect(() => {
    const getProducts = async () => {
      // setLoading(true);
      const huyRes = await fetch(
        "https://api-backend-murex.vercel.app/v2/huyit"
      );
      if (componentMouted) {
        setData(await huyRes.clone().json());
        // data(await huyRes.json());
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
          <div role="status">
            <svg
              aria-hidden="true"
              className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  };

  // show products

  const ShowProducts = () => {
    return (
      <>
        <div className="container mx-auto pb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
            {data.slice(0, visible).map((items) => {
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
      <div className="pt-10">
        <NavLink to={`/products`}>
          <h2 className="text-center font-upper font-bold text-3xl">
            You may also like
          </h2>
        </NavLink>
        <div className="line-bg"></div>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </>
  );
};

export default Suggestions;
