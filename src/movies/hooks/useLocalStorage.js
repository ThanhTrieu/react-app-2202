import { useState } from 'react';

// de xu ly du lieu voi localStorage tren trinh duyet
export const useLocalStorage = (keyName, defaultValue) => {
    const [storeValue, setStoreValue] = useState(() => {
        try {
            // lay ra gia tri trong localStorage neu da ton tai;
            const value = window.localStorage.getItem(keyName);
            if(value){
                // chuyen nguoc tu string ve object
                return JSON.parse(value);
            } else {
                // luu gia tri vao localStorage
                // chi luu vao localStorage o dang string
                // JSON.stringify chuyen object ve string de luu
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch(err) {
            return defaultValue;
        }
        // return value hoac return defaultValue : storeValue cua useState
    });

    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch(error) {
            console.log(error);
        }
        setStoreValue(newValue);
    }
    return [storeValue, setValue];
}