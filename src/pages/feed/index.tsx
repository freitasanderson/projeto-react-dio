import { Link } from "react-router-dom";

import bannerImage from "../../assets/banner.png"
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighLight } from "./styles";

const Feed = ()=> {
    return(
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex="3">
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex="1">
                    <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo percentual={35} nome="Anderson Freitas" image="https://avatars.githubusercontent.com/u/108918987?v=4"/>
                    <UserInfo percentual={50} nome="Anderson Freitas" image="https://avatars.githubusercontent.com/u/108918987?v=4"/>
                    <UserInfo percentual={90} nome="Anderson Freitas" image="https://avatars.githubusercontent.com/u/108918987?v=4"/>
                    <UserInfo percentual={10} nome="Anderson Freitas" image="https://avatars.githubusercontent.com/u/108918987?v=4"/>
                    <UserInfo percentual={24} nome="Anderson Freitas" image="https://avatars.githubusercontent.com/u/108918987?v=4"/>
                    <UserInfo percentual={70} nome="Anderson Freitas" image="https://avatars.githubusercontent.com/u/108918987?v=4"/>

                </Column>
            </Container>
        </>
    )
}

export { Feed }