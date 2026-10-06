import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-primary-600 dark:text-primary-400 font-semibold' : 'text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400';
  };

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-extrabold text-gradient tracking-tight">
              Aura
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`px-3 py-2 text-base transition-colors ${isActive('/')}`}>
              Trang chủ
            </Link>
            <Link to="/about" className={`px-3 py-2 text-base transition-colors ${isActive('/about')}`}>
              Giới thiệu
            </Link>
            <Button variant="gradient" className="ml-4 py-2 px-6">
              Bắt đầu ngay
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
