import React from 'react';
import  {FiThumbsUp} from 'react-icons/fi';

import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from './styles';

const Card = () => {
  return (
        <CardContainer>
            <ImageBackground src="https://pokedex.freitas.codes/assets/img/background.jpg"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/108918987?v=4"/>
                    <div>
                        <h4>Anderson Freitas</h4>
                        <p>Há 2 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para Curso de Pandeiro e Berimbau</h4>
                    <p>Projeto feito com um pandeiro roubado e um berimbau fuleiro... <strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>CSS & JavaScript</h4>
                    <p>
                        <FiThumbsUp/>10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }

