import React, { useContext } from 'react';
import { Row, Col, Pagination, Skeleton } from 'antd';
import GlobalContext from '../context/index';

const PaginationMovie = () => {
    const { page, totalItems, changePage, loading, dataMovies } = useContext(GlobalContext);
    if(loading){
        return <Skeleton active />
    }
    if(dataMovies.length === 0){
        return null;
    }
    return (
        <Row style={{ marginBottom: '50px' }}>
            <Col span={12} offset={6}>
                <Pagination
                    current={page}
                    total={totalItems}
                    showSizeChanger={false}
                    pageSize={20}
                    onChange={p => changePage(p)}
                />
            </Col>
        </Row>
    )
}
export default React.memo(PaginationMovie);