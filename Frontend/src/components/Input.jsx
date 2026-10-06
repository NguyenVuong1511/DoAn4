import React from 'react';

const Input = ({ label, id, error, className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`
          w-full px-4 py-3 rounded-xl
          bg-white/50 dark:bg-slate-900/50 
          backdrop-blur-sm border 
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-200/50 dark:border-slate-700/50 focus:border-primary-500 focus:ring-primary-500'}
          text-slate-900 dark:text-white
          shadow-inner placeholder-slate-400 dark:placeholder-slate-500
          transition-all duration-300 outline-none
          focus:ring-2 focus:ring-opacity-50 focus:bg-white dark:focus:bg-slate-800
        `}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 ml-1">{error}</span>
      )}
    </div>
  );
};

export default Input;
