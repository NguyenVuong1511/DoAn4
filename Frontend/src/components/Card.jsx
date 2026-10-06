import React from 'react';

const Card = ({ children, className = '', hover = false, ...props }) => {
  return (
    <div 
      className={`glass-panel p-6 ${hover ? 'hover:-translate-y-2' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
