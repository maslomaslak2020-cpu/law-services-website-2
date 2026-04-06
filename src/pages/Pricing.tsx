import Layout from '@/components/Layout';
import BtnPrimary from '@/components/ui/BtnPrimary';
import BtnSecondary from '@/components/ui/BtnSecondary';
import Icon from '@/components/ui/icon';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

const PRICES = [
  {
    title: 'Консультация',
    price: 'от 2 000 ₽',
    desc: 'Анализ ситуации, оценка перспектив, рекомендации',
    includes: ['Устная консультация до 1 часа', 'Анализ документов (до 3 шт.)', 'Правовая позиция', 'Ответ на вопросы'],
  },
  {
    title: 'Анализ документов',
    price: 'от 3 000 ₽',
    desc: 'Письменное заключение с выводами и рисками',
    includes: ['Проверка договора на риски', 'Выявление нарушений', 'Рекомендации по исправлению', 'Письменное заключение'],
  },
  {
    title: 'Подготовка иска',
    price: 'от 8 000 ₽',
    desc: 'Процессуальные документы с правовым обоснованием',
    includes: ['Исковое заявление', 'Жалобы и ходатайства', 'Досудебная претензия', 'Правовое обоснование'],
  },
  {
    title: 'Ведение дела',
    price: 'от 25 000 ₽',
    desc: 'Полное представительство от иска до решения',
    includes: ['Все судебные заседания', 'Процессуальные документы', 'Взаимодействие с судом', 'Контроль исполнения'],
  },
  {
    title: 'Апелляция',
    price: 'от 15 000 ₽',
    desc: 'Обжалование в вышестоящих инстанциях',
    includes: ['Анализ решения суда', 'Апелляционная жалоба', 'Кассационная жалоба', 'Представительство в суде'],
  },
  {
    title: 'Абонентское сопровождение бизнеса',
    price: 'от 15 000 ₽/мес',
    desc: 'Юридический аутсорсинг для компаний',
    includes: ['Неограниченные консультации', 'Проверка договоров', 'Претензионная работа', 'Судебное представительство'],
    accent: true,
  },
];

const MODELS = [
  {
    icon: 'DollarSign',
    title: 'Фиксированная оплата',
    desc: 'Стоимость фиксируется в договоре до начала работы. Никаких сюрпризов.',
  },
  {
    icon: 'Layers',
    title: 'Поэтапная оплата',
    desc: 'Оплата по этапам работы. Удобно при длительных делах.',
  },
  {
    icon: 'TrendingUp',
    title: 'Процент от результата',
    desc: 'По согласованию — часть гонорара привязана к взысканной сумме.',
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: `linear-gradient(160deg, ${DEEP} 0%, ${NAVY} 100%)`, borderBottom: '1px solid rgba(200,163,95,0.12)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>прозрачная стоимость</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white mb-6" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
            Стоимость
          </h1>
          <p className="font-golos text-[16px] leading-relaxed max-w-2xl" style={{ color: PROSE }}>
            Цены фиксируются в договоре. Никаких скрытых платежей и неожиданных счетов в процессе работы.
          </p>
        </div>
      </section>

      {/* Прайс */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {PRICES.map((p) => (
              <div
                key={p.title}
                className="p-7 flex flex-col"
                style={{
                  background: p.accent ? 'rgba(200,163,95,0.07)' : NAVY,
                  border: p.accent ? `1px solid rgba(200,163,95,0.35)` : '1px solid rgba(200,163,95,0.1)',
                }}
              >
                {p.accent && (
                  <div className="font-golos text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: G }}>
                    для бизнеса
                  </div>
                )}
                <div className="font-golos font-semibold text-white text-[15px] mb-2">{p.title}</div>
                <div className="font-cormorant font-semibold text-[32px] mb-2" style={{ color: G }}>{p.price}</div>
                <div className="font-golos text-[13px] mb-5" style={{ color: MUTED }}>{p.desc}</div>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.includes.map((it) => (
                    <li key={it} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: G }} />
                      <span className="font-golos text-[12px]" style={{ color: PROSE }}>{it}</span>
                    </li>
                  ))}
                </ul>
                <BtnPrimary to="/contacts" className="w-full text-center">Узнать стоимость</BtnPrimary>
              </div>
            ))}
          </div>

          {/* Модели оплаты */}
          <div className="mb-10">
            <div className="text-center mb-8">
              <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                Модели оплаты
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {MODELS.map((m) => (
                <div key={m.title} className="p-6 text-center" style={{ border: '1px solid rgba(200,163,95,0.1)', background: NAVY }}>
                  <div className="w-10 h-10 mx-auto flex items-center justify-center mb-4" style={{ border: `1px solid rgba(200,163,95,0.25)`, color: G }}>
                    <Icon name={m.icon} size={17} />
                  </div>
                  <div className="font-golos font-semibold text-white text-[14px] mb-2">{m.title}</div>
                  <div className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Пояснение */}
          <div className="p-6" style={{ background: 'rgba(200,163,95,0.04)', border: '1px solid rgba(200,163,95,0.15)' }}>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5" style={{ border: `1px solid rgba(200,163,95,0.3)`, color: G }}>
                <Icon name="Info" size={14} />
              </div>
              <div>
                <div className="font-golos font-semibold text-white text-[14px] mb-2">Как формируется стоимость</div>
                <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>
                  Стоимость зависит от сложности дела, объёма документов и срока работы. Точная цена определяется после первичного анализа ситуации. Цены «от» — минимальный порог для стандартных случаев. Сложные и нестандартные ситуации обсуждаются индивидуально.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: NAVY }}>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-cormorant font-semibold text-white mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
            Узнайте точную стоимость по вашей ситуации
          </h2>
          <p className="font-golos text-[14px] mb-8" style={{ color: MUTED }}>
            После первичного анализа дадим точную стоимость и сроки. Без скрытых платежей.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <BtnPrimary to="/contacts">Разобрать мою ситуацию</BtnPrimary>
            <BtnSecondary to="/contacts">Получить консультацию</BtnSecondary>
          </div>
        </div>
      </section>
    </Layout>
  );
}
