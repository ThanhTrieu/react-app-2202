import React from 'react';
import LayoutCorona from './components/Layout';
import GlobalCorona from './components/Global';
import CountriesCorona from './components/Countries';
import { api } from './services/api';

export default class AppCorona extends React.PureComponent
{
    constructor(props){
        super(props);
        this.state = {
            global: {},
            countries: []
        }
    }

    async componentDidMount(){
        // call api
        const data = await api.getDataVirusCorona();
        if(data.hasOwnProperty('Global')){
            this.setState({global: data.Global});
        }
        if(data.hasOwnProperty('Countries')){
            this.setState({countries: data.Countries});
        }
    }

    render() {
        //console.log(this.state.global);
        return (
            <LayoutCorona>
                <GlobalCorona global={this.state.global} />
                <CountriesCorona countries={this.state.countries} />
            </LayoutCorona>
        )
    }
}