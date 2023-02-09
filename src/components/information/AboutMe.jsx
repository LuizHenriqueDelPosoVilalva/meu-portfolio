import styled from 'styled-components'

import H2 from '../typography/H2'

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
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const StyledGitHub = styled.div`
  background-image: url('./github.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
`

function AboutMe() {
  const handleClick = () => {
    console.log('ENTROU AQUI')
  }

  return (
    <StyledContent>
      <H2>Sobre mim:</H2>
      <StyledConteiner>
        <StyledParagraph>
          Tenho 24 anos e estudo programação a 6 meses, descobri meu sonho e minha paixão em
          programar no ano de 2022, antes disso sempre trabalhei em serviços pesados e apesar de
          gostar de tecnologia, de ficar varias horas no computador nunca acreditei que programação
          fosse pra mim, até que tive um problema de saude que me impedia de pegar pesos e precisei
          fazer transição de carreira, comecei a estudar programação e nunca mais parei.
        </StyledParagraph>
        <StyledIconFlex>
          <StyledGitHub onClick={handleClick} />
        </StyledIconFlex>
      </StyledConteiner>
    </StyledContent>
  )
}

export default AboutMe
