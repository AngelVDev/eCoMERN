import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRegister } from "../redux/apiCall";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();
  // const errorBack = useSelector((state) => state.user.error_register);
  const registerDone = useSelector((state) => state.user.register_done);
  // const [errors, setErrors] = useState("");
  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (registerDone) {
      alert("Usuario creado correctamente");
      setInput({
        userName: "",
        email: "",
        password: "",
        password2: "",
      });
      return navigate.push("/home");
    }
  }, [dispatch, navigate, registerDone]);

  // const inputsError = ["userName", "email", "password", "password2"];

  function handleChange(e) {
    e.preventDefault();

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // setErrors(
    //   validate({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );
    // dispatch(resetError());
  }
  // function handleChange2(e) {
  //   e.preventDefault();
  //   setErrors(
  //     validate({
  //       ...input,
  //       [e.target.name]: e.target.value,
  //     })
  //   );
  // }

  function handleSubmit(e) {
    e.preventDefault();
    // if (
    //   !inputsError.some((inp) => errors.hasOwnProperty(inp)) &&
    //   input.userName.length > 0
    // ) {
    dispatch(userRegister(input));
    // }
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          {/* <Input placeholder='Name' />
          <Input placeholder='Last name' /> */}
          <Input
            placeholder='Username'
            name='userName'
            value={input.value}
            onChange={handleChange}
          />
          <Input
            placeholder='E-mail'
            name='email'
            value={input.value}
            onChange={handleChange}
          />
          <Input
            placeholder='Password'
            type='password'
            name='password'
            value={input.value}
            onChange={handleChange}
          />
          <Input
            placeholder='Confirm password'
            type='password'
            name='password2'
            value={input.value}
            onChange={handleChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
