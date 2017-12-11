import names from '../actionTypeName/name';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case names.token: 
    var obj = { token: action.payload }
    return Object.assign({}, state, obj);

    case names.id:
    var obj = { id: action.payload }
    return Object.assign({}, state, obj);

    default:
    return state
  }
};

export default reducer;
