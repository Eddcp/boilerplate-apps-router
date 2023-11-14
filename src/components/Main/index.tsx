import * as S from './styles'
const Main = ({
  title = 'Advanced React',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default Main
