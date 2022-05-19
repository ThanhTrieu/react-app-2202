import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

const LayoutCorona = (props) => {
    return(
        <Row>
            <Col span={20} offset={2}>
                {props.children}
            </Col>
        </Row>
    )
}
LayoutCorona.propTypes = {
    children: PropTypes.node.isRequired
}
export default React.memo(LayoutCorona);