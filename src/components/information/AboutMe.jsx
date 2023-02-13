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

const StyledIconFlex = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

function AboutMe() {
  return (
    <StyledContent>
      <H2>Sobre mim</H2>
      <StyledConteiner>
        <StyledParagraph>
          Olá meu nome é Luiz Henrique tenho 24 anos , descobri meu sonho e minha paixão em
          programar no ano de 2022, antes disso sempre trabalhei em serviços pesados, apesar de
          gostar de tecnologia, então resolvir um dia parar tudo que estava fazendo para estudar e
          desde então nunca mais parei, estudo todo dia o quanto eu puder, estou buscando qualquer
          oportunidades no mercado de trabalho da programação.
        </StyledParagraph>
        <StyledIconFlex>
          <H4>Meu GitHub:</H4>
          <Icon
            iconName={'github'}
            link={'https://github.com/LuizHenriqueDelPosoVilalva'}
            alt="Landscape picture"
          />
        </StyledIconFlex>
      </StyledConteiner>
    </StyledContent>
  )
}

export default AboutMe
