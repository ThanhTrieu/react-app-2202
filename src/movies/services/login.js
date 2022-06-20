//import jwt from 'jsonwebtoken';
//import { KEY_TOKEN } from '../const/index';

const loginUser = ({ username, password }) => {
    // do ko co api backend
    // mh se gia lap luon
    let token = null;
    if(username === 'admin' && password === '123456789'){
        // ma hoa token
        //token = jwt.sign({ id: 1, username: username }, KEY_TOKEN, { algorithm: 'RS256'});
        token = { id: 1, username: username };
    }
    // luu token vao localStorage tren trinh duyet
    return token;
}

export const apiLogin = {
    loginUser
}