import React,{Component} from 'react';

import {Container,UserLoginBox,UserInput,UserButton } from './home.style';
import {Wrapper} from "../../utils/styles/global.style";

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';


class Home extends Component{
    state = {
        users: [],
        userValue: ' ',
    };

    addNewUser = () => {
        this.setState({
            users: [...this.state.users, this.state.userValue],
            userValue: '',
        });
    };

    userOnChange = (event) => {
        this.setState({userValue: event.target.value});
    };
    render(){

        return(
            <Container>
                <Header/>
                <Wrapper>
                    <UserLoginBox>
                        <div>
                            Please add Github users name to observable.</div>
                        <UserInput value={this.state.userValue} onChange={this.userOnChange}/>
                            <UserButton onClick={this.addNewUser}>
                                Add
                            </UserButton>
                    </UserLoginBox>
                </Wrapper>
                <Footer/>
            </Container>



        );
    }
}
export default Home;