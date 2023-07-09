
import { Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AuthenticationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
  };

  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
    outline: 'none',
  };

  return (
    <div>
      <Link to={'/userprofile'} style={linkStyles}>
        <Button>
          My Account
        </Button>
      </Link>

      <div >
        <Typography
          variant="h6"
          component="h2"
          align="left"
          gutterBottom
        >
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit} style={{alignItems:"center",display:"flex",flexDirection:"column"}}>
          <div>
            <div>Email</div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{display:"flex"}}
            />
          </div>

          <div>
            <div>Password</div>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={{display:"flex"}}
            />
          </div>

          <Button type="submit" variant="contained" sx={{marginTop:'20px',marginBottom:'20px'}}>Sign Up</Button>

          <Typography variant="caption">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>

        </form>
      </div>
    </div>
  );
};

export default AuthenticationPage;
