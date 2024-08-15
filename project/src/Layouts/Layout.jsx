import Footer from "../components/FooterFile/Footer";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
