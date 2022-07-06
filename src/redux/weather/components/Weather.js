import React from 'react';
import { useSelector } from 'react-redux';
import { getDataMainWeather } from '../selectors/weather';
import { createStructuredSelector } from 'reselect';
import { Row, Col } from 'antd';
import { helper } from '../helpers/common';

const WeatherData = () => {
    const { mainWeather } = useSelector(createStructuredSelector({
        mainWeather: getDataMainWeather
    }));

    if(helper.isEmptyObject(mainWeather)){
        return null
    }

    return (
        <Row>
            <Col span={20} offset={2}>
                <p>Nhiet do: {mainWeather.temp}</p>
            </Col>
        </Row>
    )
}
export default React.memo(WeatherData);