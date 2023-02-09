import styled from 'styled-components'

import H2 from '../typography/H2'
import Icon from '../icon/Icon'

const StyledContent = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledConteiner = styled.div`
  margin-top: 10px;
`

const StyledParagraph = styled.p`
  font-size: 17px;
  max-width: 500px;
`

const StyledIconFlex = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

function AboutMe() {
  return (
    <StyledContent>
      <H2>Sobre mim:</H2>
      <StyledConteiner>
        <StyledParagraph>
          Tenho 24 anos e estudo programação a 6 meses, descobri meu sonho e minha paixão em
          programar no ano de 2022, antes disso sempre trabalhei em serviços pesados e apesar de
          gostar de tecnologia, de ficar varias horas no computador nunca acreditei que programação
          fosse pra mim, até que tive um problema de saude que me impede de pegar pesos, precisei
          fazer transição de carreira, comecei a estudar programação e nunca mais parei.
        </StyledParagraph>
        <StyledIconFlex>
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
