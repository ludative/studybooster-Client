import React, { useState, useEffect } from "react";

interface ICheckBoxProps {
  id?: string; // for Label
  // type?: string // type은 checkbox니까 필요없다??
  name?: string;
  value?: boolean;
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  isIncludeLabel?: boolean;
  labelText?: string;
  onChange?: (e: ICheckBoxReturnData) => void;
}

export interface ICheckBoxReturnData {
  name: string;
  checked: boolean;
}

function CheckBox(props: ICheckBoxProps): JSX.Element {
  const [checked, setChecked] = useState<boolean | undefined>(false);
  useEffect(() => {
    setChecked(props.checked);
  }, [checked]);

  const handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = target;
    const { onChange } = props;
    if (onChange) {
      console.log("checkbox handlechange", checked);
      onChange({ name, checked: !checked });
    }
  };

  const properties = {
    id: props.id,
    name: props.name,
    checked,
    type: "checkbox",
    disabled: props.disabled
  };

  return (
    <div>
      <input {...properties} onChange={handleChange} />
      {props.isIncludeLabel ? (
        <label htmlFor={props.id}>{props.labelText}</label>
      ) : (
        ""
      )}
    </div>
  );
}

export default CheckBox;
