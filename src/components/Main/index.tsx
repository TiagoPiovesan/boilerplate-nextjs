import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, React, NextJS, e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Logo React" />
    <S.Title>{title}</S.Title>
    <S.Descripton>{description}</S.Descripton>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor de freten a uma tela com código"
    />
  </S.Wrapper>
)

export default Main
