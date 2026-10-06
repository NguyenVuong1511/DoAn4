import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg hover:shadow-glow focus:ring-primary-500",
    secondary: "bg-white/20 dark:bg-slate-800/40 backdrop-blur-md text-slate-800 dark:text-white border border-white/40 dark:border-slate-600/50 hover:bg-white/40 dark:hover:bg-slate-700/50 shadow-glass focus:ring-slate-400",
    gradient: "bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 text-white bg-[length:200%_auto] hover:bg-[center_right_1rem] shadow-lg hover:shadow-glow focus:ring-secondary-500",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Micro-animation overlay */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 ease-out" />
      )}
    </button>
  );
};

export default Button;
