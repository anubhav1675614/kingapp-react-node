export const SET_HAT_LOGO_IMAGE = 'set/hat/logo/image';
export const SET_HAT_LOGO_POS = 'set/hat/logo/pos';
export const SET_HAT_PRODUCTS = 'set/hat/products';

export const setHatLogoImageRequest = image => {
  return {
    type: SET_HAT_LOGO_IMAGE,
    image
  };
};

export const setHatLogoPosRequest = position => {
  return {
    type: SET_HAT_LOGO_POS,
    position
  };
};

export const setProductsRequest = products => {
  return {
    type: SET_HAT_PRODUCTS,
    products
  };
};
