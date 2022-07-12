import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDataCarts, getTotalMoneyCart } from '../../redux/selectors/cart';
import LayoutComponent from '../../components/Layout';
import { cartAction } from '../../redux/reducers/cart/slices';
import { Row, Col, Image, InputNumber, Button } from 'antd';

const ShoppingCartPage = () => {
    const dataCarts  = useSelector(getAllDataCarts);
    const totalMoney = useSelector(getTotalMoneyCart);
    const dispatch   = useDispatch();

    const deleteItem = id => {
        dispatch(cartAction.deleteItemCart(id));
    }

    const changeQuantity = (data) => {
        dispatch(cartAction.changeQuantityItemCart(data));
    }

    if(dataCarts.length === 0){
        return(
        <LayoutComponent>
            <h2> Chua co san pham trong gio hang </h2>
        </LayoutComponent>
        )
    }

    return (
        <LayoutComponent>
            {dataCarts.map((item,index) => (
                <Row key={index} style={{ borderBottom: '1px solid #ccc', padding: '20px 0px'}}>
                    <Col span={8}>
                        <Image src={item.image} />
                    </Col>
                    <Col span={16}>
                        <h2>{item.title}</h2>
                        <p>price: {item.price}</p>
                        <p>Money: {item.price*item.qty}</p>
                        <InputNumber
                            value={item.qty}
                            min={1}
                            max={10}
                            onChange={val => changeQuantity({id: item.id, qty: val})}
                        />
                        <p>
                            <Button
                                type="dashed" danger
                                onClick={() => deleteItem(item.id)}
                            >
                                remove
                            </Button>
                        </p>
                    </Col>
                </Row>
            ))}
            <Row>
                <Col span={24}>
                    <p> Total money: {totalMoney}</p>
                </Col>
            </Row>
        </LayoutComponent>
    )
}
export default React.memo(ShoppingCartPage);