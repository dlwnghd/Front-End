import styled, { css } from "styled-components";

const variantCSS = {
  primary: css`
    background: ${({ theme }) => theme.PALETTE.primary[300]}; 
    color: ${({ theme }) => theme.PALETTE.fontColor};
  `,

  "primary-reverse": css`
    border: 1px solid ${({ theme }) => theme.PALETTE.primary[300]};
    color: ${({ theme }) => theme.PALETTE.primary[300]};
  `,

  "primary-text": css`
    border: none;
    color: ${({ theme }) => theme.PALETTE.primary[300]};
  `,
};

const shapeCSS = {
  default: css``,
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

const sizeCSS = {
  small: css`
    width: 64px;
    height: 32px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
  medium: css`
    width: 96px;
    height: 48px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
  large: css`
    width: 128px;
    height: 64px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
  full: css`
    width: 100%;
    aspect-ratio: 8 / 1;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
};

// hover를 버튼마다 다르게 하고 싶다
const hoverCSS = {
  default: css`
    &:hover {
      background: ${({ theme }) => theme.PALETTE.primary[500]};
    }
  `,
  test1: css`
    &:hover {
      background: ${({ theme }) => theme.PALETTE.primary[500]};
      box-shadow: 0 0 10px 0 ${({ theme }) => theme.PALETTE.primary[500]};
    }
  `,
  test2: css`
    &:hover {
      background: ${({ theme }) => theme.PALETTE.primary[500]};
      box-shadow: 0 0 10px 0 ${({ theme }) => theme.PALETTE.primary[500]};
    }
  `,
  test3: css`
  &:hover {
    background: black;
    color: white;
  }
  `
};


export const Button = styled.button`
  /*      ⬇️ 콜백함수의 인자로 받아옴 */
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  ${({ hover }) => hoverCSS[hover]}
  /* ⬇️ Button의 공통 스타일 속성들 */
  cursor: pointer;
  border: none;
  /* :hover {
    opacity: 0.8;
  } */
`;
