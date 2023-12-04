import styled from 'styled-components'

export const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
export const NewsCard = styled.div`
display: flex;
  width: 30%;
  margin: 0.625rem;
  padding: 0.625rem;
  text-align: justify;
  flex-direction: column;
  justify-content: space-between;
  a {
    color: ${(props) => props.theme['green-700']};
    font-weight: bold;
    text-decoration: none;
    max-height: 6rem;
    height: 100%;
    overflow: hidden;
    margin-bottom: 1rem;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const PublishedAt = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 0.825rem;
  color: ${(props) => props.theme['green-700']};
`;