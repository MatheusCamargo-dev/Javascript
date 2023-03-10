import React from 'react';
import { Container } from '../../styles/Styles';
import { Title } from './styled';
export default function Login() {
    return (
    <Container>
        <Title isRed={true}>
            Login
        </Title>
        <a href="#">Oie</a>
        <button type="button">Submit</button>
    </Container>   
    );
}