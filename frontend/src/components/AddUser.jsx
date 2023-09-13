import React from "react";
import { useState } from "react";
import {
  FormGroup,
  InputLabel,
  FormControl,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultObject = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const addUserDetails = () => {};
export default function AddUser() {
  const [user, setUser] = useState(defaultObject);

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name:</InputLabel>
        <Input onChange={onValueChange} name="Name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username:</InputLabel>
        <Input onChange={onValueChange} name="Username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email:</InputLabel>
        <Input onChange={onValueChange} name="Email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone:</InputLabel>
        <Input onChange={onValueChange} name="Phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={addUserDetails}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
}
