import { ADD_TO_CART } from '../actions/cartActions';

const initState = {
  items: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      items: [...state.items, action.product]
    };
  } else {
    return state;
  }
};

export default cartReducer;
