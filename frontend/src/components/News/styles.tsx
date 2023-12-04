import { styled } from 'styled-components'

export const Title = styled.h2`
  color: ${(props) => props.theme['green-700']};
  margin-top: 3rem;
`

export const Content = styled.div`
  p {
    margin: 1rem 0;
  }

  a {
    color: inherit;
  }
`
export const Nav = styled.nav`
  a {
    color: ${(props) => props.theme['green-700']};
    &:hover {
      opacity: 0.7;
    }
  }
`
