import { createStore, combineReducers } from "redux";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex >= 0) {
        // Eğer ürün zaten varsa, miktarı artır
        const updatedCart = state.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedCart;
      } else {
        // Ürün yoksa, sepete yeni bir ürün ekle ve miktarı 1 olarak ayarla
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
