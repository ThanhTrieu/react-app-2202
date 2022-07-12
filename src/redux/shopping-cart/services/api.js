import axios from 'axios';

const getAllDataProduction = async () => {
    const url = `https://fakestoreapi.com/products`;
    const response = await axios.get(url);
    const result   = response.status === 200 ? response.data : [];
    return result;
}

const getDataProductById = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const response = await axios.get(url);
    const result   = response.status === 200 ? response.data : null;
    return result;
}

export const apiShopping = {
    getAllDataProduction,
    getDataProductById
}