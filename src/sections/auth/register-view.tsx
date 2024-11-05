import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { register } from 'src/client/api';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function RegisterView() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = useCallback(async () => {
    try {
      const result = await register(name, email, password);
      if (result) {
        router.push('/');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }, [name, email, password, router]);

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <TextField
        fullWidth
        name="name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        name="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        name="password"
        label="Password"
        value={password}
        error={password !== confirmPassword}
        helperText={password !== confirmPassword && 'password is not match'}
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{ shrink: true }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        name="confirm password"
        label="Confirm Password"
        value={confirmPassword}
        error={password !== confirmPassword}
        helperText={password !== confirmPassword && 'password is not match'}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        InputLabelProps={{ shrink: true }}
        type={showConfirmPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                <Iconify icon={showConfirmPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={handleRegister}
      >
        Register
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Register</Typography>
        <Typography variant="body2" color="text.secondary">
          Have an account?
          <a href="/sign-in">
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Sign in
            </Link>
          </a>
        </Typography>
      </Box>

      {renderForm}
    </>
  );
}
