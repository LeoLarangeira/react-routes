import React from "react";
import logo from  "../../assets/LOGO-DIO-COLOR.png"
import { Wrapper, 
    Container,
    Row,
    Column,
    BuscarInputContainer,
    Menu,
    Img,
    UserPicture,
    Input, 
    MenuRight} from "./styles";
import {Button} from '../buttons';

const HeaderComponent = () => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <Img src = {logo} alt="logo da dio"/>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </Row>
            </Container>
        </Wrapper>
    )
}

export {HeaderComponent}