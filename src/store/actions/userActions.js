import jwt_decode from "jwt-decode";

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    fetch("http://localhost:5000/api/users/all")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchUsersSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error));
      });
  };
}

export const fetchUsersBegin = () => {
  return {
    type: FETCH_USERS_BEGIN
  };
};

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error }
});

export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export function registerUser(user) {
  return dispatch => {
    dispatch(registerUserBegin());
    fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          console.log(res.error);
        }
        dispatch(registerUserSuccess(res));
        console.log("response " + res);
        return res;
      })
      .catch(error => {
        dispatch(registerUserFailure(error));
      });
  };
}

export const registerUserBegin = () => {
  return {
    type: REGISTER_USER_BEGIN
  };
};

export const registerUserSuccess = user => ({
  type: REGISTER_USER_SUCCESS,
  payload: { user }
});

export const registerUserFailure = error => ({
  type: REGISTER_USER_FAILURE,
  payload: { error }
});

export const REGISTER_USER_BEGIN = "REGISTER_USER_BEGIN";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export function loginUser(user) {
  return dispatch => {
    dispatch(loginUserBegin());
    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password })
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userId: res.userId,
            token: res.token
          })
        );
        const decodedToken = jwt_decode(res.token);
        console.log(decodedToken);
        dispatch(setCurrentUser(decodedToken));
        if (res.error) {
          console.log("loginUser error");
          console.log(res.error);
        }
        dispatch(loginUserSuccess(res));
        console.log("loginUser success");
        console.log(res);
        return res;
      })
      .catch(error => {
        console.log("loginUser failure");
        console.log(error);
        dispatch(loginUserFailure(error));
      });
  };
}

export const loginUserBegin = () => {
  return {
    type: LOGIN_USER_BEGIN
  };
};

export const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  payload: { user }
});

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: { error }
});

export const LOGIN_USER_BEGIN = "LOGIN_USER_BEGIN";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const setCurrentUser = decodedToken => ({
  type: SET_CURRENT_USER,
  payload: decodedToken
});

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setAuthentication = () => ({
  type: SET_AUTHENTICATION,
  payload: false
});

export const SET_AUTHENTICATION = "SET_AUTHENTICATION";

export const logoutUser = () => dispatch => {
  localStorage.removeItem("userData");
  dispatch(setCurrentUser({}));
  dispatch(setAuthentication());
};

export const LOGOUT_USER = "LOGOUT_USER";
