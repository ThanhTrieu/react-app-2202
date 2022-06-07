import React from 'react';
import { Row, Col, Card } from 'antd';
import PropTypes from 'prop-types';

const { Meta } = Card;

const ListDataMovies = ({ movies }) => {
    if(movies.length === 0){
        return(
            <Row style={{margin: '20px 0px'}}>
                <Col span={24}>
                    <h5> Khong co du lieu</h5>
                </Col>
            </Row>
        )
    }
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

ListDataMovies.propTypes = {
    movies: PropTypes.array.isRequired
}

export default React.memo(ListDataMovies);