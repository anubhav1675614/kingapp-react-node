import { King } from '../actions';

const initialState = {
  hatLogoImage: null,
  hatLogoPos: '',
  products: []
};

const kingReducer = (state = initialState, action) => {
  switch (action.type) {
    case King.SET_HAT_LOGO_IMAGE:
      console.log(action.image);
      return { ...state, hatLogoImage: action.image };
    case King.SET_HAT_LOGO_POS:
      return { ...state, hatLogoPos: action.position };
    case King.SET_HAT_PRODUCTS:
      return { ...state, products: action.products };
    default:
      return state;
  }
};

export default kingReducer;
