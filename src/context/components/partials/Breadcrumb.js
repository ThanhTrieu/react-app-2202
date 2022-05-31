import React, { useContext } from 'react';
import { Breadcrumb } from 'antd';
import GlobalContext from '../../global/context';

const BreadcrumbComponent = () => {
    const data = useContext(GlobalContext);
    return (
        <Breadcrumb
            style={{
            margin: '16px 0',
            }}
        >
            <Breadcrumb.Item>{data.lv1}</Breadcrumb.Item>
            <Breadcrumb.Item>{data.lv2}</Breadcrumb.Item>
            <Breadcrumb.Item>{data.lv3}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default React.memo(BreadcrumbComponent);