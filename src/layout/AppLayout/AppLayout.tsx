import Footer from '@/layout/Footer/Footer';
import Header from '@/layout/Header/Header';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
