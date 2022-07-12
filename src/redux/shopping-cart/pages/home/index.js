import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetProductsData, addProductToCart } from '../../redux/sagas/action';
import { getLoadingHome, getAllDataProductFromState } from '../../redux/selectors/home';
import { getLoadingCart, getErrorCart } from '../../redux/selectors/cart';
import { createStructuredSelector } from 'reselect';
import LayoutComponent from '../../components/Layout';
import { Row, Col, Card, Skeleton, Button } from 'antd';

const { Meta } = Card;

const HomePage = () => {
    const { loading, products, addCart, errorCart } = useSelector(createStructuredSelector({
        loading: getLoadingHome,
        products: getAllDataProductFromState,
        addCart: getLoadingCart,
        errorCart: getErrorCart
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestGetProductsData());
    }, [dispatch]);


    const addToCart = (id) => {
        dispatch(addProductToCart(id));
    }

    if(loading && products.length === 0){
        return (
            <LayoutComponent>
                <Skeleton active />
            </LayoutComponent>
        )
    }

    return (
        <LayoutComponent>
            <h2> List products </h2>
            <Row>
                {products.map((item,index) => (
                    <Col span={6} key={index}>
                        <Card
                            hoverable
                            bordered={false}
                            style={{
                                width: 240,
                                marginRight: '5px',
                                marginTop: '5px'
                            }}
                            cover={<img alt={item.title} src={item.image} />}
                        >
                            <Meta title={item.title} />
                            <div>
                                <p>Category: {item.category}</p>
                                <p>Price: {item.price}</p>
                                <Button
                                    type="primary"
                                    onClick={()=> addToCart(item.id)}
                                    disabled={addCart}
                                > Add cart</Button>
                            </div>
                        </Card>
                    </Col>
                ))}
                
            </Row>
        </LayoutComponent>
    )
}
export default React.memo(HomePage);