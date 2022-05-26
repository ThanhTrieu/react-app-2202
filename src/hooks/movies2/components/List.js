import React from 'react';
import { Row, Col, Card, Skeleton } from 'antd';

const { Meta } = Card;

const ListDataMovies = ({ movies }) => {
    return (
        <Row style={{margin: '20px 0px'}}>
            {movies.map((item, index) => (
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