import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const NAV = [
  { label: 'О компании', to: '/about' },
  { label: 'Практика', to: '/practice' },
  { label: 'Услуги', to: '/services' },
  { label: 'Кейсы', to: '/cases' },
  { label: 'Блог', to: '/blog' },
  { label: 'Контакты', to: '/contacts' },
  { label: 'Оплатить', to: '/payment' },
];

const DEEP = '#081629';
const G = '#C8A35F';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? `${DEEP}f0` : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,163,95,0.12)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{ border: `1px solid ${G}`, color: G }}
          >
            <span className="font-cormorant font-semibold text-sm leading-none">ПП</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-cormorant font-semibold text-white text-[15px] leading-none tracking-wide">
              Право Привилегия
            </div>
            <div className="font-golos text-[10px] tracking-[0.2em] uppercase mt-0.5" style={{ color: G }}>
              юридическая компания
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-golos text-[13px] transition-colors duration-200"
              style={{
                color: location.pathname === n.to ? G : 'rgba(201,212,227,0.85)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = G)}
              onMouseLeave={e => (e.currentTarget.style.color = location.pathname === n.to ? G : 'rgba(201,212,227,0.85)')}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+78634000000"
            className="font-golos text-[13px] transition-colors"
            style={{ color: 'rgba(201,212,227,0.7)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,212,227,0.7)')}
          >
            +7 (863) 400-00-00
          </a>
          <Link
            to="/contacts"
            className="font-golos text-[13px] font-medium px-5 py-2.5 transition-all duration-200"
            style={{
              background: G,
              color: DEEP,
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          >
            Консультация
          </Link>
        </div>

        {/* Burger */}
        <button
          className="lg:hidden p-2"
          style={{ color: 'rgba(201,212,227,0.9)' }}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden px-6 pb-6 pt-2"
          style={{ background: `${DEEP}f8`, borderTop: '1px solid rgba(200,163,95,0.1)' }}
        >
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="block font-golos text-[15px] py-3"
              style={{
                color: location.pathname === n.to ? G : 'rgba(201,212,227,0.85)',
                borderBottom: '1px solid rgba(200,163,95,0.07)',
              }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contacts"
            className="block font-golos text-[14px] font-medium text-center py-3 mt-4"
            style={{ background: G, color: DEEP }}
          >
            Получить консультацию
          </Link>
        </div>
      )}
    </header>
  );
}