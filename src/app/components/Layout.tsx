import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => (
  <div
    className="min-h-screen w-full bg-cover bg-fixed bg-center"
    style={{
      backgroundImage: "url('/images/background.jpg')",
    }}>
    {children}
  </div>
);

export default Layout;
