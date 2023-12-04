import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  max-width: 85rem;
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  flex-direction: column;

  @media (max-width: 1024px), (max-width: 768px) {
    width: 90%;
  }
`;
