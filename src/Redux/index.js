import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [],
};

function favorites(state = INITIAL_STATE, action) {  
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, data: [...state.data, action.music] }
    case 'REMOVE_FAVORITE':
      const newData = state.data.filter(stater => stater.id !== action.music.id)
      return { data: newData }
    default:
      return state;
  }
}

const store = createStore(favorites);

export default store;