interface CustomProps {
  label: string;
  onClick: Function;
  className?: string;
}

const PrimaryBtn = (props: CustomProps) => {
  const btnClassName = `bg-primary px-16 py-2 text-white rounded-md ${props.className}`;
  return (
    <button className={btnClassName} onClick={() => props.onClick()}>
      {props.label}
    </button>
  );
};

export default PrimaryBtn;
