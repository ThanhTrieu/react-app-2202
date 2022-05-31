import React from 'react';
import GlobalContext from '../global/context';

const BreadcrumbProvider = (props) => {
    const data = {lv1: 'Home', lv2: 'List', lv3: 'App'};
    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default React.memo(BreadcrumbProvider);