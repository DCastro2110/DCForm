import * as S from "./style";

type Props = {
  stepName: string;
  stepInfo: string;
  imgSrc: string;
  isActive: boolean
};

export const StepIcon = ({ stepName, stepInfo, imgSrc, isActive }: Props) => {
  return (
    <S.Box>
      <S.TextBox>
        <span>{stepName}</span>
        <small>{stepInfo}</small>
      </S.TextBox>

      <S.ImgBox isActive={isActive}>
        <img draggable="false" src={imgSrc} alt="" />
      </S.ImgBox>

      <S.Circle isActive={isActive}></S.Circle>
    </S.Box>
  );
};
