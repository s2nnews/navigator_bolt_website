interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({ variant = 'primary', children, onClick, className = '', disabled = false }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded font-semibold transition-colors';

  const variants = {
    primary: 'bg-[#FF9500] text-black hover:bg-orange-600',
    secondary: 'border-2 border-[#FF9500] text-[#FF9500] hover:bg-[#FF9500] hover:text-black',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ''} ${className}`}
    >
      {children}
    </button>
  );
}
