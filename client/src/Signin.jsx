import { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import Button from "@mui/material/Button";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Signin() {
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')

  return (
    <div className="d-flex justify-content-center align-items-center bg-black vh-100">
      <div className="bg-dark p-3 rounded w-50">
        <form>
        <p className="text-light">
        <strong>Sign-In</strong> and Enjoy thosands of Movies and Series from
        our library
      </p>
          <div className="mb-3">
            <TextField
              type="text"
              placeholder="Email/Mobile Number"
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control bg-secondary rounded-0"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
              
            />
          </div>
          <div className="mb-3">
            <TextField
              type="password"
              placeholder="Password.."
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control bg-secondary rounded-0"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <p className="text-light">Forgot Password?</p>
          <Button
          onSubmit={handleSubmit}
            variant="contained"
            color="primary"
            endIcon={<LoginOutlinedIcon />}
          >
            Sign In
          </Button>
          <p className="justify-content-center align-items-center text-light">New User?</p>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AccountCircleOutlinedIcon />}
          >
            Create A New Account
          </Button>
        </form>
      </div>
    </div>
  );

}
export default Signin;
