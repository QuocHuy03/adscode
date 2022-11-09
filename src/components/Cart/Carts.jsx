import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addCart, deleteCart } from "../../Redux/Action";
import { formatPrice } from "../../utils";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import "./cart.css";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const state = useSelector((state) => state.addHandleCart);
  //   console.log(state.length);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addCart(item));
    toast.success(
      "Đã Tăng Số Lượng Sản Phẩm",
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
  const handleReduce = (item) => {
    dispatch(deleteCart(item));
    toast.error(
      "Đã Giảm Số Lượng Sản Phẩm",
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
  // xóa sản phẩm
  const handleDel = (item) => {
    dispatch(deleteCart(item));
    toast.error(
      "Xóa Số Lượng Sản Phẩm",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };
  
  // check out
  const handleCheckout = () => {
    toast.success(
      "Cảm ơn người anh em đã mua hàng. Người anh em vui lòng chú ý đơn hàng. Chúc người anh em sức khỏe <3 ",
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
  const emptyCart = () => {
    return (
      <div className="container max-w-max mx-auto my-10">
        <div className="row">
          <img src="https://shopcode.biz/assets/img/empty-cart.png" alt="" />
        </div>
      </div>
    );
  };
  const emptyTitle = () => {
    return (
      <>
        <h2 className="text-xl pb-3">
          Giỏ hàng trống, hãy đi mua sắm đi rồi quay lại nhen!
        </h2>
      </>
    );
  };
  const cartItems = (product) => {
    return (
      <tr className="bg-white border-b-2 border-gray-200" key={product.id}>
        <td className="px-16 py-2 flex flex-row items-center">
          <img
            className="h-20 w-25 object-cover"
            src={product.imageUrl}
            alt={product.name}
          />
        </td>

        <td className="text-center">
          <span className="font-semibold">{product.category}</span>
        </td>

        <td className="text-center">
          <span className="font-semibold">{product.name}</span>
        </td>

        <td className="text-center">
          <span className="font-semibold">{formatPrice(product.price)}</span>
        </td>
        <td className="text-center buy-amout">
          <button onClick={() => handleReduce(product)}>
            <FaMinus className="icon" />
          </button>
          <input type="text" value={product.quantity} />
          <button onClick={() => handleAdd(product)}>
            <FaPlus className="icon" />
          </button>
        </td>

        <td className="text-center">
          <span className="font-semibold">
            {formatPrice(product.quantity * product.price)}
          </span>
        </td>

        {/* <td>
          {state.reduce((total,product) => total+(product.quantity * product.price),0)}</td> */}

        <td className="px-16 py-2">
          <span
            className="text-yellow-500 flex"
            onClick={() => handleDel(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-700 mx-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </td>
      </tr>
    );
  };
  const buttons = () => {
    return (
      <>
        <ul className="checkout">
          <li className="text-right">
            <div className="flex justify-end pt-4 gap-2">
              <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <NavLink
                  to={`/product`}
                  className="btn btn-primary checkout-item"
                  title="Tiếp tục mua hàng"
                >
                  <span>Tiếp tục mua hàng</span>
                </NavLink>
              </div>
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <button onClick={handleCheckout} className="checkout-item">
                  <span>Thanh toán</span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </>
    );
  };

  return (
    <div className="container max-w-max mx-auto pt-20 sm:pt-3">
      <ToastContainer />
      <div className="header-cart pb-1">
        <h1 className="text-3xl font-bold">Giỏ Hàng</h1>
      </div>
      {state.length === 0 && emptyTitle()}
      <div className="overflow-x-auto">
        <table className="mx-auto min-w-full table-auto ">
          <thead className="justify-between">
            <tr className="bg-green-600">
              <th className="px-5 sm:px-16 py-2">
                <span className="text-gray-100 font-semibold">Image</span>
              </th>
              <th className="px-5 sm:px-16 py-2">
                <span className="text-gray-100 font-semibold">Name</span>
              </th>

              <th className="px-5 sm:px-16 py-2">
                <span className="text-gray-100 font-semibold">Category</span>
              </th>

              <th className="px-5 sm:px-16 py-2">
                <span className="text-gray-100 font-semibold">Price</span>
              </th>

              <th className="px-5 sm:px-16 py-2">
                <span className="text-gray-100 font-semibold">Quantity</span>
              </th>
              <th className="px-5 sm:px-16 py-2">
                <span className="text-gray-100 font-semibold">Total</span>
              </th>
              <th className="px-5 sm:px-16 py-2">
                <span className="text-gray-100 font-semibold">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {state.length !== 0 && state.map(cartItems)}
          </tbody>
          <tfoot>
            <tr>
              <td colspan={3} className="py-2">
                <font color="red">
                  (*) Mã giảm giá chỉ áp dụng cho tổng tiền của loại sản phẩm
                  được khuyến mãi!
                </font>
              </td>
              <td colSpan={4} className="text-right">
                Tổng Tiền:{" "}
                <strong>
                  {formatPrice(state.reduce((total, product) => total + product.quantity * product.price,0))}
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
        {state.length === 0 && emptyCart()}
      </div>
      <div className="pb-5">{state.length !== 0 && buttons()}</div>
      {/* <Slider/> */}
    </div>
  );
};

export default Cart;
