import * as S from "./style";

type Props = {
  stepName: string;
  stepInfo: string;
  imgSrc: string;
};

export const StepIcon = ({ stepName, stepInfo, imgSrc }: Props) => {
  return (
    <S.Box>
      <S.TextBox>
        <span>{stepName}</span>
        <small>{stepInfo}</small>
      </S.TextBox>

      <S.ImgBox>
        <img src={imgSrc} alt="" />
      </S.ImgBox>

      <S.Circle></S.Circle>
    </S.Box>
  );
};
