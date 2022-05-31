import React, { useState, useEffect } from 'react';
import GlobalContext from '../global/context';
import { api } from '../services/api';

const MenuHeaderProvider = (props) => {
    const [dataMenu, setDataMenu] = useState([]);

    useEffect(() => {
        const getDataFromApi = () => {
            const data = api.getDataMenuHeader();
            setDataMenu(data);
        }
        getDataFromApi();
    }, []); // componentDidMount

    return(
        <GlobalContext.Provider value={dataMenu}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default React.memo(MenuHeaderProvider);