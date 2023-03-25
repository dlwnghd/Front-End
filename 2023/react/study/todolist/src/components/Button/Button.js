// 이 버튼은 모든 곳에서 사용가능한 버튼 컨포넌트
import * as S from './style';

function Button(props) {
  const { variant, shape, size, children, coffee, ...rest } = props;
  //                             자식요소         ...rest : 나머지 매개변수

    return (
      <S.Button
        variant={variant}
        shape={shape}
        size={size}
        hover={coffee}
        {...rest}
      >
        {children}
      </S.Button>
    );
}
export default Button;