import { useState, useEffect, useCallback } from 'react';

export const useLocalStorage = (key: string): [string, (value: string) => void, () => void] => {
  const [data, setData] = useState('{}');

  const fetch = useCallback(() => {
    const localVal = window.localStorage.getItem(key);
    if (localVal) {
      setData(localVal);
    }
  }, [key]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const setLocalStorage = (value: string) => {
    window.localStorage.setItem(key, value);
    setData(value);
  };

  return [data, setLocalStorage, fetch];
};
