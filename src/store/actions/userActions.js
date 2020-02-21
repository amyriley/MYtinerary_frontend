export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    fetch("http://localhost:5000/users/all")
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

export function postUser(user) {
  return dispatch => {
    dispatch(postUserBegin());
    fetch("http://localhost:5000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(postUserSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(postUserFailure(error));
      });
  };
}

export const postUserBegin = () => {
  return {
    type: POST_USER_BEGIN
  };
};

export const postUserSuccess = user => ({
  type: POST_USER_SUCCESS,
  payload: { user }
});

export const postUserFailure = error => ({
  type: POST_USER_FAILURE,
  payload: { error }
});

export const POST_USER_BEGIN = "POST_USER_BEGIN";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_FAILURE = "POST_USER_FAILURE";
