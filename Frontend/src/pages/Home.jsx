import React, { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Modal from '../components/Modal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-16 pb-12">
      <SEO title="Trang chủ" description="Design System Showcase" />
      
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mt-10 md:mt-20">
        <h1 className="text-5xl md:text-7xl mb-6 font-extrabold">
          Giao diện Web <br/> <span className="text-gradient">Hiện Đại & Phá Cách</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Hệ thống Design System tinh tế xây dựng với TailwindCSS v3. Tích hợp sẵn Glassmorphism, Gradients và vi tương tác (Micro-animations).
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="gradient" onClick={() => setIsModalOpen(true)}>Mở Modal Demo</Button>
          <Button variant="secondary">Khám phá tài liệu</Button>
        </div>
      </section>

      {/* Components Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        <Card hover={true}>
          <h2 className="text-2xl mb-6">Inputs & Forms</h2>
          <div className="space-y-5">
            <Input label="Địa chỉ Email" id="email" type="email" placeholder="example@domain.com" />
            <Input label="Mật khẩu" id="password" type="password" placeholder="Nhập mật khẩu..." error="Mật khẩu của bạn quá yếu" />
          </div>
        </Card>

        <Card hover={true} className="flex flex-col">
          <h2 className="text-2xl mb-6">Buttons</h2>
          <div className="flex flex-col gap-6 justify-center flex-grow">
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="gradient">Gradient Button</Button>
              <Button variant="primary" disabled className="opacity-50 cursor-not-allowed">Disabled</Button>
            </div>
          </div>
        </Card>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Xác nhận hành động">
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300">
            Bạn đang xem Modal được thiết kế theo phong cách Glassmorphism. Background phía sau đã bị khoá cuộn và làm mờ (backdrop-blur) để tăng độ tập trung.
          </p>
          <div className="flex justify-end gap-3 mt-8">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Đóng</Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>Lưu thay đổi</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
