// src/Layout.jsx
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/1.avif')]">
      {children}
    </div>
  );
};

export default Layout;
