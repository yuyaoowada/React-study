/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px;
    border-radius: 20px;
  `;
  const titleStyle = css`
    margin: 0;
    color: #3d84a8;
  `;
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!</SButton>
    </div>
  );
};
const SButton = styled.button`
  background-color: #abedd8;
  &:hover {
    background-color: #3d84a8;
  }
`;
