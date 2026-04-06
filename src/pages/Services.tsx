import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import SituationModal from '@/components/SituationModal';
import { Link } from 'react-router-dom';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

const SERVICES = [
  {
    icon: 'MessageCircle',
    num: '01',
    title: 'Консультация',
    desc: 'Первичный анализ ситуации, оценка перспектив дела, формирование правовой позиции.',
    result: 'Правовая позиция, оценка перспектив, рекомендации',
    price: 'от 2 000 ₽',
    includes: ['Разбор вашей ситуации', 'Анализ документов (при наличии)', 'Оценка шансов и рисков', 'Рекомендации по стратегии'],
    color: 'rgba(200,163,95,0.06)',
  },
  {
    icon: 'Search',
    num: '02',
    title: 'Анализ документов',
    desc: 'Правовая экспертиза договоров, решений, доказательной базы. Выявляем риски и нарушения.',
    result: 'Письменное заключение с выводами и рекомендациями',
    price: 'от 3 000 ₽',
    includes: ['Проверка договоров на риски', 'Анализ судебных решений', 'Экспертиза доказательной базы', 'Рекомендации по исправлению'],
    color: 'rgba(200,163,95,0.04)',
  },
  {
    icon: 'FileEdit',
    num: '03',
    title: 'Подготовка иска',
    desc: 'Профессиональное исковое заявление с детальным правовым обоснованием.',
    result: 'Готовый иск / жалоба / претензия с правовым обоснованием',
    price: 'от 8 000 ₽',
    includes: ['Исковое заявление', 'Апелляционная / кассационная жалоба', 'Досудебная претензия', 'Ходатайства и заявления'],
    color: 'rgba(200,163,95,0.06)',
  },
  {
    icon: 'Gavel',
    num: '04',
    title: 'Ведение дела',
    desc: 'Полное судебное представительство от подачи иска до исполнительного листа.',
    result: 'Решение суда в вашу пользу, контроль исполнения',
    price: 'от 25 000 ₽',
    includes: ['Представительство в заседаниях', 'Все процессуальные документы', 'Взаимодействие с судом и приставами', 'Контроль исполнения'],
    color: 'rgba(200,163,95,0.04)',
  },
  {
    icon: 'RefreshCw',
    num: '05',
    title: 'Апелляция',
    desc: 'Обжалование решений суда первой инстанции в вышестоящих инстанциях.',
    result: 'Отмена или изменение решения суда',
    price: 'от 15 000 ₽',
    includes: ['Анализ решения суда', 'Апелляционная жалоба', 'Кассационная жалоба', 'Представительство в суде'],
    color: 'rgba(200,163,95,0.06)',
  },
];

function ServiceCard({ s, onSituationClick }: { s: typeof SERVICES[0]; onSituationClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col p-6 sm:p-7 cursor-default transition-all duration-300 group"
      style={{
        background: hovered ? 'rgba(200,163,95,0.1)' : s.color,
        border: hovered ? '1px solid rgba(200,163,95,0.45)' : '1px solid rgba(200,163,95,0.12)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.35)' : '0 0 0 rgba(0,0,0,0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Угловой акцент */}
      <div
        className="absolute top-0 right-0 w-8 h-8 transition-all duration-300"
        style={{
          background: hovered ? G : 'rgba(200,163,95,0.15)',
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        }}
      />

      {/* Номер + иконка */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="font-cormorant font-light leading-none transition-all duration-300"
          style={{ fontSize: '42px', color: hovered ? G : 'rgba(200,163,95,0.2)' }}
        >
          {s.num}
        </span>
        <div
          className="w-10 h-10 flex items-center justify-center transition-all duration-300"
          style={{
            border: `1px solid ${hovered ? G : 'rgba(200,163,95,0.25)'}`,
            color: G,
            background: hovered ? 'rgba(200,163,95,0.12)' : 'transparent',
          }}
        >
          <Icon name={s.icon} size={17} />
        </div>
      </div>

      {/* Заголовок */}
      <h2
        className="font-cormorant font-semibold text-white mb-2 transition-all duration-300"
        style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
      >
        {s.title}
      </h2>

      {/* Цена */}
      <div
        className="font-cormorant font-semibold mb-4 transition-all duration-300"
        style={{ fontSize: '22px', color: G }}
      >
        {s.price}
      </div>

      {/* Описание */}
      <p className="font-golos text-[13px] leading-relaxed mb-5 flex-1" style={{ color: PROSE }}>
        {s.desc}
      </p>

      {/* Включает */}
      <ul className="space-y-1.5 mb-6">
        {s.includes.map((it) => (
          <li key={it} className="flex items-center gap-2.5">
            <div
              className="w-1 h-1 rounded-full shrink-0 transition-all duration-300"
              style={{ backgroundColor: hovered ? G : 'rgba(200,163,95,0.5)' }}
            />
            <span className="font-golos text-[12px]" style={{ color: MUTED }}>{it}</span>
          </li>
        ))}
      </ul>

      {/* Результат */}
      <div
        className="px-3 py-2.5 mb-5 transition-all duration-300"
        style={{
          background: hovered ? 'rgba(200,163,95,0.12)' : 'rgba(200,163,95,0.04)',
          border: `1px solid ${hovered ? 'rgba(200,163,95,0.3)' : 'rgba(200,163,95,0.1)'}`,
        }}
      >
        <span className="font-golos text-[10px] tracking-[0.15em] uppercase" style={{ color: MUTED }}>Результат: </span>
        <span className="font-golos text-[12px]" style={{ color: PROSE }}>{s.result}</span>
      </div>

      {/* CTA */}
      <button
        onClick={onSituationClick}
        className="w-full font-golos font-semibold text-[13px] py-3 transition-all duration-300"
        style={{
          background: hovered ? G : 'rgba(200,163,95,0.12)',
          color: hovered ? DEEP : G,
          border: `1px solid ${hovered ? G : 'rgba(200,163,95,0.25)'}`,
        }}
      >
        Получить консультацию
      </button>
    </div>
  );
}

export default function Services() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      {showModal && <SituationModal onClose={() => setShowModal(false)} />}

      {/* Hero */}
      <section
        className="relative pt-28 sm:pt-32 pb-16 sm:pb-20"
        style={{ background: `linear-gradient(160deg, ${DEEP} 0%, ${NAVY} 100%)`, borderBottom: '1px solid rgba(200,163,95,0.12)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>формат работы</span>
          </div>
          <h1
            className="font-cormorant font-semibold text-white leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(42px, 6vw, 80px)' }}
          >
            Юридическая помощь<br className="hidden sm:block" /> бизнесу и гражданам
          </h1>
          <p className="font-golos text-[14px] sm:text-[16px] leading-relaxed max-w-2xl" style={{ color: PROSE }}>
            Пять форматов работы — от первичной консультации до полного ведения дела. Каждый с чётким результатом и прозрачной стоимостью.
          </p>
        </div>
      </section>

      {/* Карточки услуг */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.num} s={s} onSituationClick={() => setShowModal(true)} />
            ))}

            {/* Финальная карточка-CTA */}
            <div
              className="relative flex flex-col items-center justify-center p-7 text-center sm:col-span-2 xl:col-span-1"
              style={{ background: 'rgba(200,163,95,0.07)', border: '1px solid rgba(200,163,95,0.25)' }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ border: `1px solid ${G}`, color: G }}>
                <Icon name="Phone" size={20} />
              </div>
              <h3 className="font-cormorant font-semibold text-white text-[24px] mb-3">
                Не знаете какая услуга нужна?
              </h3>
              <p className="font-golos text-[13px] leading-relaxed mb-7" style={{ color: PROSE }}>
                Опишите ситуацию — мы сами определим формат и предложим подходящее решение.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="w-full font-golos font-semibold text-[14px] py-3.5 mb-3 transition-opacity hover:opacity-85"
                style={{ background: G, color: DEEP }}
              >
                Разобрать мою ситуацию
              </button>
              <Link
                to="/contacts"
                className="font-golos text-[13px] transition-opacity hover:opacity-70"
                style={{ color: MUTED }}
              >
                или написать напрямую →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс */}
      <section style={{ background: NAVY, borderTop: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
              <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>как это работает</span>
              <div className="w-10 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
            </div>
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}>
              Анализ → Стратегия → Результат
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { n: '01', icon: 'Search', title: 'Анализ', desc: 'Изучаем ситуацию, документы, формируем правовую позицию' },
              { n: '02', icon: 'Map', title: 'Стратегия', desc: 'Определяем оптимальный путь и формат работы' },
              { n: '03', icon: 'CheckCircle', title: 'Результат', desc: 'Ведём до завершения дела и исполнения решения' },
            ].map((step) => (
              <div key={step.n} className="p-6 text-center" style={{ border: '1px solid rgba(200,163,95,0.1)' }}>
                <div className="w-11 h-11 mx-auto flex items-center justify-center mb-4" style={{ border: `1px solid rgba(200,163,95,0.3)`, color: G }}>
                  <Icon name={step.icon} size={18} />
                </div>
                <div className="font-cormorant font-semibold text-white text-[22px] mb-2">{step.title}</div>
                <div className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
