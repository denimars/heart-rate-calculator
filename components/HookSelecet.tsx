import React, { useState } from "react";
import { Controller, FieldError } from "react-hook-form";

interface HookSelectAttributes {
  options: string[];
  label: string;
  control: any;
  name: string;
  error: FieldError | undefined
}

export default function HookSelect({
  options,
  label,
  control,
  name,
  error
}: HookSelectAttributes) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options[0]}
      render={({ field: { onChange, onBlur, value } }) => {
        const [isOpen, setIsOpen] = useState(false);
        const selected = value || options[0]; // Get selected value from form state
        value = options[0]

        const toggleDropdown = () => {
          setIsOpen((prev) => !prev);
          onBlur(); // Call onBlur when toggling
        };

        const handleSelected = (option: string) => {
          onChange(option); // Update form state
          setIsOpen(false);
        };

        return (
            <div>
          <div className="relative">
            <label>{label}</label>
            <div
              className="bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer"
              onClick={toggleDropdown}
            >
              <div>{selected}</div>
            </div>
            {isOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => handleSelected(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {error && <span className="text-red-300">{error.message}</span>}
          </div>
        );
      }}
    />
  );
}
