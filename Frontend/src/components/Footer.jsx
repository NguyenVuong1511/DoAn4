import React from 'react';

const Footer = () => {
  return (
    <footer className="glass-panel rounded-none border-x-0 border-b-0 rounded-t-[2.5rem] mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-bold text-gradient">Aura Design</span>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Hệ thống UI Component hiện đại.
          </p>
        </div>
        
        <div className="flex space-x-6 text-sm text-slate-600 dark:text-slate-400">
          <a href="#" className="hover:text-primary-500 transition-colors">Điều khoản</a>
          <a href="#" className="hover:text-primary-500 transition-colors">Bảo mật</a>
          <a href="#" className="hover:text-primary-500 transition-colors">Liên hệ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
