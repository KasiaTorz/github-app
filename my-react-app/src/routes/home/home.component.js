import React,{Component} from 'react';
import {Container} from './home.style';

import Header from '../../components/header/header.component';
import Footer from '../..comnents/footer/footer.component';

class Home extends Component{
    render(){
        return(
            <Container>
                <Header/>
            </Container>



        );
    }
}
export default Home;