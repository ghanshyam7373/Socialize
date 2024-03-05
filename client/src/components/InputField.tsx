import { ChangeEventHandler, FocusEventHandler } from "react";

interface CustomProps {
  type: string;
  label: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  error?: string;
  isRequired?: boolean;
}

const InputField = (props: CustomProps) => {
  return (
    <div className="w-[100%]">
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        value={props.value}
        className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary placeholder-gray-400"
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        required={props.isRequired || false}
      />
      {props.error && props.error?.length > 0 && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {props.error}
        </p>
      )}
    </div>
  );
};

export default InputField;
