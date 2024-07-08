const Button = ({ num, w, h, bg = "bg-gray-900", onClick }) => {
  return (
    <button
      className={`flex items-center justify-center border py-2 px-4 rounded-md w-${w} h=${h} ${bg}`}
      onClick={onClick}
    >
      {num}
    </button>
  );
};

export default Button;
