import styled from 'styled-components'

import H2 from '../typography/H2'
import H4 from '../typography/H4'
import Icon from '../icon/Icon'

const StyledContent = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledConteiner = styled.div`
  margin-top: 30px;
`

const StyledParagraph = styled.p`
  font-size: 17px;
  max-width: 800px;
  text-align: center;
`

const StyledSubtitle = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const StyledIconFlex = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  padding: 20px;
  border-radius: 10px;
`

const StyledEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`

const Abbr = styled.abbr`
  cursor: pointer;
`

function AboutMe() {
  return (
    <StyledContent>
      <H2>Sobre mim</H2>
      <StyledConteiner>
        <StyledParagraph>
          Olá meu nome é Luiz Henrique tenho 24 anos , descobri meu sonho e minha paixão em
          programar no ano de 2022, antes disso sempre trabalhei em serviços pesados, apesar de
          gostar de tecnologia, então resolvi um dia parar tudo que estava fazendo para estudar e
          desde então nunca mais parei, estudo todo dia o quanto eu puder, estou buscando quaisquer
          oportunidades no mercado de trabalho da programação.
        </StyledParagraph>
        <StyledSubtitle>
          <H4 id="Contacts">Contatos</H4>
        </StyledSubtitle>
        <StyledIconFlex>
          <Icon
            iconName={'github'}
            link={'https://github.com/LuizHenriqueDelPosoVilalva'}
            alt="GitHub"
          />
          <Abbr title="Email: luizgarciaevilalva@gmail.com">
            <Icon iconName={'email'} alt="gmail" />
          </Abbr>
          <Icon
            iconName={'linkedin'}
            link={'https://www.linkedin.com/in/luiz-henrique-delposovilalva/'}
            alt="linkedin"
          />
        </StyledIconFlex>
        <StyledEmail>
          <StyledParagraph>Email: luizgarciaevilalva@gmail.com</StyledParagraph>
        </StyledEmail>
      </StyledConteiner>
    </StyledContent>
  )
}

export default AboutMe
