import { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import "./detail.css";
import { addCart } from "../../Redux/Action";
import { formatPrice } from "../../utils";
import Suggestions from "../Suggestions";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailProduct = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // add

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success(
      "Thêm Sản Phẩm Thành Công",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  // end

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const huyReq = await fetch(
        `https://api-backend-murex.vercel.app/v2/huyit/${id}`
      );
      setProduct(await huyReq.json());
      setLoading(false);
      // console.log(huyReq);
    };
    getProduct();
    // console.log(product);
  }, []);

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
  const ShowDetail = () => {
    return (
      <div className="container mx-auto max-w-[85%]">
        <ToastContainer />
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-3">
          <div className="img-box mx-auto shadow">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="rounded"
            />
          </div>
          {/* </div> */}
          <div className="col-xl-6">
            <div className="product-box">
              <h5 className="product-title">{product.name}</h5>
              <div className="group-status">
                <span className="status-title">
                  Người Bán:{" "}
                  <a href="/product/:id" className="status-name">
                    {product.seller}
                  </a>
                </span>
              </div>
              <div className="group-cate">
                <span className="status-title">
                  Chuyên Mục:{" "}
                  <a href="/categorys/8" className="status-name">
                    {product.category}
                  </a>{" "}
                </span>
              </div>
              <div className="price-box">
                <span className="price">{formatPrice(product.price)}</span>{" "}
                <span className="price-old"></span>
              </div>
              <div className="product-description">
                <ul>
                  <li>
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
                    {product.description}
                  </li>
                </ul>
              </div>

              <div className="clearfix"></div>
              <div className="pt-4">
                {props.email ? (
                  <button
                    className="btnhuy btn-dark shadow-lg p-3 hover:c-text-red-600"
                    onClick={() => addProduct(product)}
                  >
                    <span className="text-1">Thêm Giỏ Hàng</span>
                    <span className="text-2">Mua ngay</span>
                  </button>
                ) : (
                  navigate("/signin")
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="service-detail-box" id="product">
              <div className="service-item">
                <span>Bạn có thể thêm nhiều sản phẩm vào giỏ</span>
                <p>Thanh toán một lúc</p>
              </div>
              <div className="service-item">
                <span>Số ngày được mua 365 Ngày</span>
              </div>
            </div>
            <div className="maybe-you-like">
              <div className="card">
                <div className="card-header">
                  <h2>Có thể bạn sẽ thích</h2>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item hover:c-bg-gray-400">
                    <a href="##">Code Website</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Suggestions />
      </div>
    );
  };
  return <>{loading ? <Loading /> : <ShowDetail />}</>;
};

export default DetailProduct;
