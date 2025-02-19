import { PropsWithChildren } from "react";
import * as S from "./Slider.styles";
import SVGIcon from "../icons/SVGIcon";
import useSlider from "@/hooks/useSlider";
import useHover from "@/hooks/useHover";

const Slider = ({ children }: PropsWithChildren) => {
  const {
    curIndex,
    slideToPrevContent,
    slideToNextContent,
    isFirstContentIndex,
    isLastContentIndex,
    childrenArray,
  } = useSlider(children);
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <S.Slider onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.Contents curIndex={curIndex} length={childrenArray.length}>
        {childrenArray.map((child, index) => (
          <S.Content key={child?.props?.id || index}>{child}</S.Content>
        ))}
      </S.Contents>
      <S.PrevButton
        onClick={slideToPrevContent}
        isHovered={isHovered}
        isFirstContentIndex={isFirstContentIndex}
      >
        <SVGIcon name="LeftIcon" />
      </S.PrevButton>
      <S.NextButton
        onClick={slideToNextContent}
        isHovered={isHovered}
        isLastContentIndex={isLastContentIndex}
      >
        <SVGIcon name="RightIcon" />
      </S.NextButton>
    </S.Slider>
  );
};

export default Slider;
