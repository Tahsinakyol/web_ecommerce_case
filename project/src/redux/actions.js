// Sepete ürün ekleme aksiyonu
export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

// Sepetten ürün çıkarma aksiyonu
export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};
