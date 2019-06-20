import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};

  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: ${({ theme }) => theme.bold};
    `}

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.bold};
    `}
`;

export default Paragraph;
