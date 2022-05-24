import React from 'react';
import { Row, Col, Input } from 'antd';

const { Search } = Input;

const SearchMovie = (props) => {
    return(
        <Row style={{ margin: '10px 0px' }}>
            <Col span={12} offset={6}>
                <Search
                    placeholder="input search text"
                    enterButton
                    onSearch={val => props.search(val)}
                    loading={props.loading}
                />
            </Col>
        </Row>
    )
}

export default React.memo(SearchMovie);