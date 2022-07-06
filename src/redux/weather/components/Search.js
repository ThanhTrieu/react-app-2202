import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestSearchWeather } from '../actions/index';
import { getStateLoadingWeather } from '../selectors/weather';
import { Row, Col, Input } from 'antd';
import { createStructuredSelector } from 'reselect';

const { Search } = Input;

const SearchWeather = () => {
    const dispatch = useDispatch();
    const { loadingSearch } = useSelector(createStructuredSelector({
        loadingSearch: getStateLoadingWeather
    }));

    return (
        <Row style={{margin: '30px 0px'}}>
            <Col span={12} offset={6}>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    loading={loadingSearch}
                    onSearch={val => dispatch(requestSearchWeather(val)) }
                />
            </Col>
        </Row>
    )
}
export default React.memo(SearchWeather);