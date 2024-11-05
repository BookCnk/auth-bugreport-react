import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://localhost:8080';

export const getAllUser = async () => {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${baseUrl}/user`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.request(config);
    return response.data;
  } catch (e) {
    console.error('Error fetching users:', e);
    throw e;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${baseUrl}/user/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.request(config);
    return response.data;
  } catch (e) {
    console.error('Error fetching users:', e);
    throw e;
  }
};

export const editUSer = async (id: string, name: string, email: string) => {
  try {
    const data = JSON.stringify({
      name,
      email,
    });
    const config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `${baseUrl}/user/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
    const response = await axios.request(config);
    return response.data;
  } catch (e) {
    console.log('err : ', e);
    throw e;
  }
};
