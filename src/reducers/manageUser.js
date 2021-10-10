const userReducer = (state = { user: null, authChecked: false, loggedIn: false}, action) => {
    switch(action.type) {
      case 'SET_USER':
        return {
          authChecked: true, 
          loggedIn: true,
          user: action.user,
        }

    case 'LOGOUT_USER':
      localStorage.removeItem("token")
      return {
        authChecked: true, 
        loggedIn: false,
        user: null,
      }  
      default:
        return state;
    }
  }
  
  export default userReducer;




 