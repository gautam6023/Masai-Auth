import styled from "styled-components";

export const Regi = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 150px;
  border: 1px solid;

  .form {
    width: 100%;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    box-sizing: border-box;
    padding: 20px;

    & > div {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        width: 70%;
        height: 35px;
        text-indent: 14px;
        font-size: 16px;
        &:focus {
          outline: none;
        }
      }

      textarea {
        width: 70%;
        height: 70px;
        font-size: 16px;
      }
    }
  }
  .button {
    width: 40%;
    height: 35px;
    border-radius: 5px;
    border: 0;
    font-size: 16px;
    background-color: coral;
    color: white;
    font-size: large;
    cursor: pointer;
  }
`;

export const Navbar = styled.div`
  border: 1px solid;
  height: 60px;
  display: flex;
  div {
    border: 1px solid;
    width: 50%;
    height: 100%;
    background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    input {
      height: 30px;
      border: 0;
      width: 60%;
      border-radius: 5px;
    }
  }

  button {
    height: 30px;
    background-color: azure;
    font-size: large;
    border: 0;
    width: 100px;
    border-radius: 5px;
  }
`;
