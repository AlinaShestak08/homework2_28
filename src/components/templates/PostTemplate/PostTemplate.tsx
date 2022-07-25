/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Container } from '../../../layouts/Container/Container';

//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';
import { Footer, Header } from '../../examples';

interface IPostsTemplate {
    children: ReactNode;
}
export const PostsTemplate = ({children, }: IPostsTemplate) => (
  <Wrapper>
    <Header />
    <Container>
        <Content>
           {children}
        </Content>
        <Footer />
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${ColorService.EXTRA_LIGHT};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const Content = styled.div`
min-height: calc(100vh - 160px);
  
`;

