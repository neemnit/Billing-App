const usersInitialState = {};
const loginReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case "LOGIN_USER": {
      return { ...action.payload };
    }

    default: {
      return { ...state };
    }
  }
};
export default loginReducer;
