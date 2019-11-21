import React, { useState, useEffect } from "react";
import { Input as InputStyle } from "@/styles/input";

interface IInputProps {
  type?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  onChange?: (e: IInputReturnData) => void;
}

export interface IInputReturnData {
  value: string;
  name: string;
}

const getIsValidValue = (
  min: number | undefined,
  max: number | undefined,
  value: string,
  isLength: boolean
): boolean => {
  return (
    (min !== undefined && min <= (isLength ? value.length : +value)) ||
    (max !== undefined && max >= (isLength ? value.length : +value))
  );
};

function Input(props: IInputProps): JSX.Element {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setValue(String(props.value));
  }, [props.value]);

  const handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = target;
    const { onChange, min, max, minLength, maxLength } = props;

    const isNumberValid: boolean = getIsValidValue(min, max, value, false);
    const isLengthValid: boolean = getIsValidValue(
      minLength,
      maxLength,
      value,
      true
    );
    const isValidValue: boolean = isNumberValid || isLengthValid;
    if (!isValidValue) return;

    setValue(value);
    if (onChange) {
      onChange({ value, name });
    }
  };

  const properties = {
    ...props,
    type: props.type || "text",
    value
  };

  return <InputStyle {...properties} onChange={handleChange} />;
}

export default Input;
