import { Link } from 'react-router-dom';

const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.7)';

const COLS = [
  {
    title: 'Компания',
    links: [
      { label: 'О компании', to: '/about' },
      { label: 'Как мы работаем', to: '/how-we-work' },
      { label: 'Стоимость', to: '/pricing' },
      { label: 'Блог', to: '/blog' },
    ],
  },
  {
    title: 'Практика и услуги',
    links: [
      { label: 'Практика', to: '/practice' },
      { label: 'Услуги', to: '/services' },
      { label: 'Кейсы', to: '/cases' },
    ],
  },
  {
    title: 'Клиентам',
    links: [
      { label: 'Получить консультацию', to: '/contacts' },
      { label: 'Контакты', to: '/contacts' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: DEEP, borderTop: '1px solid rgba(200,163,95,0.12)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-8 flex items-center justify-center" style={{ border: `1px solid ${G}`, color: G }}>
                <span className="font-cormorant font-semibold text-sm leading-none">ПП</span>
              </div>
              <div>
                <div className="font-cormorant font-semibold text-white text-[15px] leading-none">Право Привилегия</div>
                <div className="font-golos text-[10px] tracking-[0.2em] uppercase mt-0.5" style={{ color: G }}>юридическая компания</div>
              </div>
            </Link>
            <p className="font-golos text-[13px] leading-relaxed mb-5" style={{ color: PROSE }}>
              Юридическая помощь бизнесу и гражданам в Таганроге, Ростовской области и по всей России.
            </p>
            <a
              href="tel:+78634000000"
              className="font-golos text-[14px] font-medium block mb-1"
              style={{ color: G }}
            >
              +7 (863) 400-00-00
            </a>
            <a
              href="mailto:info@pravo-privilegia.ru"
              className="font-golos text-[13px]"
              style={{ color: PROSE }}
            >
              info@pravo-privilegia.ru
            </a>
          </div>

          {/* Nav columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <div className="font-golos text-[11px] tracking-[0.2em] uppercase font-semibold mb-5" style={{ color: G }}>
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-golos text-[13px] transition-colors duration-200"
                      style={{ color: PROSE }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = PROSE)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(200,163,95,0.1)' }}
        >
          <p className="font-golos text-[12px]" style={{ color: 'rgba(201,212,227,0.4)' }}>
            © 2024 Право Привилегия. Все права защищены.
          </p>
          <p className="font-golos text-[12px]" style={{ color: 'rgba(201,212,227,0.4)' }}>
            Таганрог, Ростовская область
          </p>
        </div>
      </div>
    </footer>
  );
}
