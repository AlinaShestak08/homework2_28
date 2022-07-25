/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Container } from '../../../layouts/Container/Container';

//import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';
import { CustomTitle, Footer, Header, Link } from '../../examples';

interface IFormTemplate {
    children: ReactNode;
    title: string;
}
export const FormTemplate = ({children, title}: IFormTemplate) => (
  <Wrapper>
    <Header />
    <Container>
        <Content>
            <Head>
                <Link  text='Back to home' url='/' onClick={() => console.log("back to home")}/>
                <CustomTitle text={title}/>
            </Head>
            <FormContent>{children}</FormContent>
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
const Head = styled.div`
  text-align: left;
  padding: 72px 0;
`;
const FormContent = styled.div`
  border: 1px solid #dadada;
  padding: 40px;
`;

