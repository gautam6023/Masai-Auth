import axios from "axios";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const GET_USERS = "GET_USERS";

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

export const loginUser = (payload, navigate) => async (dispatch) => {
  console.log(payload);
  try {
    let res = await axios.post(
      `https://masai-api-mocker.herokuapp.com/auth/login`,
      payload
    );

    navigate("/dashboard");
    if (!res.data.error) {
      alert("login Successful");
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
