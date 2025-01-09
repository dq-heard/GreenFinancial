interface NavToggleProps {
  onClick: () => void;
}

export const NavToggle: React.FC<NavToggleProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-[77px] h-full lg:hidden flex justify-center items-center"
    >
      <span className="text-primary-900">
        <svg
          width="28"
          height="22"
          viewBox="0 0 28 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M28 11H0" stroke="currentColor" strokeWidth="2"></path>
          <path d="M21 21H0" stroke="currentColor" strokeWidth="2"></path>
          <path d="M20 1H0" stroke="currentColor" strokeWidth="2"></path>
        </svg>
      </span>
    </button>
  );
};
