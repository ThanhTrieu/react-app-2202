import React from 'react';
import { Row, Col, Table, Skeleton } from 'antd';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const columns = [
    {
        title: "Quoc gia",
        dataIndex: "Country",
        key: "CountryCode"
    },
    {
        title: "Moi nhiem",
        dataIndex: "NewConfirmed",
        key: "CountryCode",
        render: text => (
            <NumberFormat value={text} displayType={'text'}
            thousandSeparator={true} />
        )
    },
    {
        title: "Tong nhiem",
        dataIndex: "TotalConfirmed",
        key: "CountryCode",
        render: text => (
            <NumberFormat value={text} displayType={'text'}
            thousandSeparator={true} />
        )
    },
    {
        title: "Tu vong",
        dataIndex: "NewDeaths",
        key: "CountryCode",
        render: text => (
            <NumberFormat value={text} displayType={'text'}
            thousandSeparator={true} />
        )
    },
    {
        title: "Tong tu vong",
        dataIndex: "TotalDeaths",
        key: "CountryCode",
        render: text => (
            <NumberFormat value={text} displayType={'text'}
            thousandSeparator={true} />
        )
    },
    {
        title: "Moi khoi",
        dataIndex: "NewRecovered",
        key: "CountryCode",
        render: text => (
            <NumberFormat value={text} displayType={'text'}
            thousandSeparator={true} />
        )
    },
    {
        title: "Tong khoi benh",
        dataIndex: "TotalRecovered",
        key: "CountryCode",
        render: text => (
            <NumberFormat value={text} displayType={'text'}
            thousandSeparator={true} />
        )
    }
];

const CountriesCorona = ({ countries }) => {

    if(countries.length === 0) {
        return (
            <Skeleton active />
        )
    }

    return (
        <Row>
            <Col span={24}>
                <Table rowKey="ID" dataSource={countries} columns={columns} />
            </Col>
        </Row>
    )
}

CountriesCorona.propTypes = {
    countries: PropTypes.array
}

export default React.memo(CountriesCorona);