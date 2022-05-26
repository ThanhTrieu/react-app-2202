import React from 'react';
import { Row, Col, Pagination } from 'antd';

const PaginationMovie = (props) => {
    return (
        <Row style={{ marginBottom: '50px' }}>
            <Col span={12} offset={6}>
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
export default React.memo(PaginationMovie);