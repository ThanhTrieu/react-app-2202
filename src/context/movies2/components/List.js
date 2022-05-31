import React, { useContext } from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import GlobalContext from '../context/index';

const { Meta } = Card;

const ListDataMovies = () => {
    const { loading, dataMovies } = useContext(GlobalContext);

    if(loading){
        return <Skeleton active />
    }
    if(dataMovies.length === 0){
        return (
            <Row style={{margin: '20px 0px'}}>
                <Col span={24}>khong co du lieu</Col>
            </Row>
        )
    }

    return (
        <Row style={{margin: '20px 0px'}}>
            {dataMovies.map((item, index) => (
                <Col span={6} key={index}>
                    <Card
                        style={{marginRight: "5px", marginBottom: "20px"}}
                        hoverable
                        cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                    >
                        <Meta title={item.title} />
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default React.memo(ListDataMovies);