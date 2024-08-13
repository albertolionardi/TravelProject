import React, { useState } from 'react';
import {Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import CloseIcon from '@mui/icons-material/Close';

const LoginModal = ({ open, handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(true); // Track email validity
    const [emailExists, setEmailExists] = useState(false); // Track if email exists
  
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setEmailValid(validateEmail(e.target.value));
    };
  
    const checkEmailExists = async () => {
      const response = await fetch(`/api/check-email?email=${email}`);
      const data = await response.json();
      if (data.exists) {
        setEmailExists(true);
      } else {
        setEmailExists(false);
        alert('Email does not exist. Please register.');
      }
    };
  
    const handleContinue = () => {
      if (emailValid) {
        checkEmailExists();
      } else {
        alert('Please enter a valid email address.');
      }
    };
  
    return (
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" mb={2}>
            Log In/Register
          </Typography>
          <TextField
            fullWidth
            label="Email/Mobile Number"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={handleEmailChange}
            error={!emailValid && email !== ''}
            helperText={!emailValid && email !== '' ? 'Invalid email format' : ''}
          />
          {emailExists && (
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleContinue}
          >
            Continue
          </Button>
          <Typography align="center" mt={2} mb={2}>
            or log in/register with
          </Typography>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          <Typography variant="body2" align="center" mt={2}>
            By registering, you agree to our <a href="/terms">Terms & Conditions</a> and that you have read our <a href="/privacy">Privacy Notice</a>.
          </Typography>
        </Box>
      </Modal>
    );
  };
  
  export default LoginModal;
