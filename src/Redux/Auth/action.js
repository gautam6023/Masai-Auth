import axios from "axios";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const GET_USERS = "GET_USERS";
export const GET_USER_DATA = "GET_USER_DATA";
export const GET_TOKEN = "GET_TOKEN";

const authRequest = () => ({
  type: AUTH_REQUEST,
});

const authSuccess = (payload) => ({
  type: AUTH_SUCCESS,
  payload,
});

//Register
export const registerUser = (payload, navigate) => async (dispatch) => {
  dispatch(authRequest());
  try {
    let res = await axios.post(
      `https://masai-api-mocker.herokuapp.com/auth/register`,
      payload
    );

    if (res.data.error) {
      alert(res.data.message);
    } else {
      alert(res.data.message);
      navigate("/login");
    }

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

//Login

const getToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

const getUserData = (payload) => ({
  type: GET_USER_DATA,
  payload,
});

export const loginUser = (payload, navigate) => async (dispatch) => {
  console.log(payload);
  try {
    let res = await axios.post(
      `https://masai-api-mocker.herokuapp.com/auth/login`,
      payload
    );
    let username = payload.username;

    // navigate("/dashboard");
    if (!res.data.error) {
      alert("login Successful");
      dispatch(getToken(res.data.token));
      console.log(res.data);

      let res1 = await fetch(
        `https://masai-api-mocker.herokuapp.com/user/${username}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${res.data.token}`,
          },
        }
      );

      let data1 = await res1.json();
      console.log(username, data1);

      dispatch(getUserData(data1));
    }
  } catch (err) {
    alert("Invalid Creadentials");
  }
};

//search user
// https://api.github.com/search/users?q=gautam

const getUsers = (payload) => ({
  type: GET_USERS,
  payload,
});

export const serachUser = (name, page) => async (dispatch) => {
  let res = await axios.get(
    `https://api.github.com/search/users?q=${name}&page=1&per_page=5`
  );
  console.log(res.data);
  dispatch(getUsers(res.data.items));
};

serachUser();
