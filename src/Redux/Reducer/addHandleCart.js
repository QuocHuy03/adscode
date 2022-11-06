

const cart = [];

const addHandleCart = (state = cart, action) => {
  const product = action.payload;
  // console.log(product);
  switch (action.type) {
    case "ADDCART":
      // check nếu product đã tồn tại
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // TĂNG SỐ LƯỢNG
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        // neeus khong thi them san pham moi
        const product = action.payload;
        return [...state, { ...product, quantity: 1 }];
        // console.log(product);
      }
      break;
// delete cart
    case "DELETECART":
      const existone = state.find((x) => x.id === product.id);
      if (existone.quantity === 1) {
        return state.filter((x) => x.id !== existone.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x
        );
      }
      break;
    default:
        return state;
      break;
  }
};

export default addHandleCart;
