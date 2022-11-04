import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import { addCart } from "../../Redux/Action";
import { formatPrice } from "../../utils";
// import ShowDetail from "../showDetail";
import Suggestions from "../Suggestions";

import "./detail.css";

const DetailProduct = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // add

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // end

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const huyReq = await fetch(`/v2/huyit/${id}`);
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
          <Skeleton height={400} />
        </div>
      </>
    );
  };
  const ShowDetail = () => {
    return (
      <div className="container mx-auto max-w-[85%]">
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
                  navigate('/signin')
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
