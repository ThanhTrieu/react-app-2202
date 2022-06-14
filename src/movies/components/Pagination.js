import React from 'react';
import { Row, Col, Pagination } from 'antd';


const PaginationMovies = (props) => {
    return (
        <Row style={{margin: '20px 0px'}}>
            <Col span={24}>
                <Pagination
                    current={props.current}
                    total={props.total}
                    showSizeChanger={false}
                    pageSize={20}
                    onChange={p => props.change(p)}
                />
            </Col>
        </Row>
    )
}
export default React.memo(PaginationMovies);