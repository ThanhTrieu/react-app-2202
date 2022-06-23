import React from 'react';
import { Row, Col, Input } from 'antd';

const { Search } = Input;

const SearchWeather = () => {
    return (
        <Row style={{margin: '30px 0px'}}>
            <Col span={12} offset={6}>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={() => {}}
                />
            </Col>
        </Row>
    )
}
export default React.memo(SearchWeather);