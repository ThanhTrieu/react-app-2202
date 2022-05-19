import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Skeleton } from 'antd';
import NumberFormat from 'react-number-format';
import { helper } from '../helpers/common';

const GlobalCorona = (props) => {

    if(helper.isEmptyObject(props.global)){
        return (
            <Skeleton active />
        )
    }

    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={8}>
                {/* bieu dien thong tin ca nhiem */}
                <Card size="small" title="Mac benh">
                    <p>
                        So ca moi mac benh: <NumberFormat
                            value={props.global.NewConfirmed}
                            displayType={'text'}
                            thousandSeparator={true}
                        />
                    </p>
                    <p>Tong so ca mac benh: <NumberFormat
                            value={props.global.TotalConfirmed}
                            displayType={'text'}
                            thousandSeparator={true}/>
                    </p>
                </Card>
            </Col>
            <Col span={8}>
                {/* bieu dien thong tin ca tu vong*/}
                <Card size="small" title="Tu vong">
                    <p>So ca moi tu vong: {props.global.NewDeaths}</p>
                    <p>Tong so ca tu vong: {props.global.TotalDeaths}</p>
                </Card>
            </Col>
            <Col span={8}>
                {/* bieu dien thong tin ca chua khoi */}
                <Card size="small" title="Khoi benh">
                    <p>So ca moi khoi benh: {props.global.NewRecovered}</p>
                    <p>Tong so ca da khoi benh: {props.global.TotalRecovered}</p>
                </Card>
            </Col>
        </Row>
    )
}

GlobalCorona.propTypes = {
    global: PropTypes.object.isRequired
}

export default React.memo(GlobalCorona);