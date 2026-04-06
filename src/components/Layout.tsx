import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#0B1F3A', minHeight: '100vh' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
