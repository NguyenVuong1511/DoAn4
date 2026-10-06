import React from 'react';
import SEO from '../components/SEO';
import Card from '../components/Card';

const About = () => {
  return (
    <div className="space-y-12">
      <SEO title="Giới thiệu" description="Về dự án của chúng tôi" />
      
      <div className="text-center max-w-3xl mx-auto mt-10">
        <h1 className="text-4xl md:text-5xl mb-6">Về <span className="text-gradient">Chúng tôi</span></h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Dự án này được xây dựng với mục tiêu cung cấp một bộ công cụ giao diện mạnh mẽ, hiện đại và thân thiện với nhà phát triển.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card hover={true}>
          <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Hiệu suất cao</h3>
          <p className="text-slate-600 dark:text-slate-400">Tối ưu hóa render và tương tác mượt mà.</p>
        </Card>
        <Card hover={true}>
          <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-900/50 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Thiết kế hiện đại</h3>
          <p className="text-slate-600 dark:text-slate-400">Giao diện phá cách với Glassmorphism.</p>
        </Card>
        <Card hover={true}>
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Dễ dàng tùy chỉnh</h3>
          <p className="text-slate-600 dark:text-slate-400">Cấu trúc Component rời rạc, dễ mở rộng.</p>
        </Card>
      </div>
    </div>
  );
};

export default About;
