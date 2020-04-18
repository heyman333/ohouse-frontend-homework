import React from "react";
import styled from "styled-components";
import CheckboxSvg from "./icon_checkbox.svg";
import CheckedCheckboxSvg from "./icon_checkbox_checked.svg";

const CheckboxIconBlock = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;

  .checkbox-icon {
    width: 100%;
    height: 100%;
  }
`;

type CheckboxIconProps = {
  isChecked: boolean;
};

function CheckboxIcon({ isChecked }: CheckboxIconProps) {
  return (
    <CheckboxIconBlock>
      <img
        className="checkbox-icon"
        src={isChecked ? CheckedCheckboxSvg : CheckboxSvg}
      />
    </CheckboxIconBlock>
  );
}

export default CheckboxIcon;
