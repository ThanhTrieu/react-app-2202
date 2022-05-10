import React from 'react';
import ChildrenComponent from './Children';

class ParentComponent extends React.Component {
    // tim hieu ve cac lifecylce react
    // 1 - mounting
    constructor(props){
        super(props);
        // se chay dau tien va duy nhat 1 lan trong giai doan mouting
        // thong thuong se la noi dinh nghia cac state trong component
        console.log('mounting - constructor ParentComponent is running');
        this.state = {
            color: 'red',
            show: true
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log('mounting or updating - getDerivedStateFromProps ParentComponent is running');
        console.log('props : ', props);
        console.log('state : ', state);
        console.log('************* End mounting or updating - getDerivedStateFromProps ParentComponent is running');
        // return ve 1 object de cap nhat lai state theo props truyen vao
        // return ve null ko lam gi ca
        // thong thuong kiem tra state cua component vs props truyen vao ko giong nhau thi cap nhat lai state theo props
        // goi setState cap nhat tra ve object
        return null; // ko lam gi ca
    }

    changeColor = () => {
        this.setState({color: 'blue'});
    }

    showHide = () => {
        this.setState({show: false});
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('updating - shouldComponentUpdate ParentComponent is running');
        // chay khi cap nhat state - updating
        // tra ve true - giao dien cap nhat lai
        // tra ve false ko lam gi ca
        // React.PureComponent: tich hop san va xu ly giup viec render lai giao dien hay ko?
        console.log('nextProps : ', nextProps);
        console.log('nextState : ', nextState);
        // thong thuong - kiem tra state vs nextState hoac props cu vs nextProps co su thay doi thi return true de cap nhat lai giao dien
        if(nextState !== this.state.color){
            return true;
        }
        console.log(' ***** End updating - shouldComponentUpdate ParentComponent ******');
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('updating - getSnapshotBeforeUpdate ParentComponent is running');
        console.log('prevProps : ', prevProps);
        console.log('prevState : ', prevState);
        // ham nay se return 1 ket qua de tra ve cho componentDidUpdate
        console.log(' ***** End updating - getSnapshotBeforeUpdate ParentComponent ******');
        return 'yellow';
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('updating - componentDidUpdate ParentComponent is running');
        console.log('prevProps : ', prevProps);
        console.log('prevState : ', prevState);
        console.log(' ***** End updating - componentDidUpdate ParentComponent ******');
        //this.setState({color: snapshot});
        document.getElementById('title').style.color = snapshot;
    }

    render(){
        // day la noi hien thi ra giao dien ui - ux
        console.log('mounting or updating - render ParentComponent is running');
        // render se chay lai o giai doan updating phu thuoc vao logic xu ly cua shouldComponentUpdate
        // shouldComponentUpdate : true ==> cap nhat lai
        // shouldComponentUpdate : false ==> ko cap nhat
        return (
            <>
                <h1 id="title" style={{color: this.state.color}}>The Component Lifecycle</h1>
                {this.state.show && <ChildrenComponent/>} 
                <button onClick={()=> this.changeColor()}> change color</button>
                <button onClick={() => this.showHide()}> Destroy Children Component</button>
            </>
        )
    }

    componentDidMount(){
        console.log('mounting - componentDidMount ParentComponent is running');
        // thong thuong noi day - call data api sau do cap nhat lai state
    }
}
export default ParentComponent;