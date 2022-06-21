import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
