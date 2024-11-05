import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://localhost:8080';

export const getUser = async () => {
  try {
    const authentication = localStorage.getItem('token');
    if (!authentication) {
      window.location.href = '/sign-in';
    }
    const userData = (
      await axios.get(`${baseUrl}/user/me`, {
        headers: {
          Authorization: `Bearer ${authentication}`,
        },
      })
    ).data;

    localStorage.setItem('userInfo', JSON.stringify(userData));
    return userData;
  } catch (e) {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    window.location.href = '/sign-in';
    return false;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const data = JSON.stringify({
      email,
      password,
    });
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseUrl}/user/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    const response = await axios.request(config);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (e) {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    Swal.fire({
      title: 'Error',
      text: e.response.data.error,
      icon: 'error',
      confirmButtonColor: 'red',
    });
    return false;
  }
};

export const register = async (name: string, email: string, password: string) => {
  try {
    const data = JSON.stringify({
      name,
      email,
      password,
    });
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseUrl}/user/sign-in`,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    const response = await axios.request(config);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (e) {
    console.log('e: ', e);
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    Swal.fire({
      title: 'Error',
      text: e.response.data.error,
      icon: 'error',
      confirmButtonColor: 'red',
    });
    return false;
  }
};


