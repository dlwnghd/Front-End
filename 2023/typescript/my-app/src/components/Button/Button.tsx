import React, {CSSProperties, PropsWithChildren} from 'react'
import * as S from './Button.style'

export interface SYButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "primary-text";
  shape: "round" | "default";
  size: "small" | "medium" | "large" | "full";
  containerStyle?: CSSProperties; // 어떤 타입인지 모르는 상황 => 일부러 틀린다 => 타입추천을 받는다 => 70%
  // children : React.ReactNode
  // onClick ---- x
}

// function

// const () =>
const SYButton: React.FC<PropsWithChildren<SYButtonProps>> = ({ variant, shape, size, children, containerStyle, ...rest }) => {
  return (
    <div style={containerStyle}>
        {/* styled components의 props로 전달하면 해당 styled에 props type을 주어야만 한다 */}
      <S.Button variant={variant} shape={shape} size={size} {...rest}>
        {children}
      </S.Button>
    </div>
  );
};
export default SYButton;
