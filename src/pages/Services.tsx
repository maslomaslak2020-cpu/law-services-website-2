import Layout from '@/components/Layout';
import BtnPrimary from '@/components/ui/BtnPrimary';
import Icon from '@/components/ui/icon';

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
    desc: 'Первичный анализ ситуации, оценка перспектив дела, формирование правовой позиции. Получаете чёткое понимание: стоит ли идти в суд и что вас ждёт.',
    result: 'Правовая позиция, оценка перспектив, рекомендации',
    price: 'от 2 000 ₽',
    includes: ['Разбор вашей ситуации', 'Анализ документов (при наличии)', 'Оценка шансов и рисков', 'Рекомендации по стратегии'],
  },
  {
    icon: 'Search',
    num: '02',
    title: 'Анализ документов',
    desc: 'Правовая экспертиза договоров, решений, доказательной базы. Выявляем риски, нарушения и возможности до совершения сделки или подачи иска.',
    result: 'Письменное заключение с выводами и рекомендациями',
    price: 'от 3 000 ₽',
    includes: ['Проверка договоров на риски', 'Анализ судебных решений', 'Экспертиза доказательной базы', 'Рекомендации по исправлению'],
  },
  {
    icon: 'FileEdit',
    num: '03',
    title: 'Подготовка иска',
    desc: 'Профессиональное исковое заявление с детальным правовым обоснованием, ссылками на законодательство и судебную практику.',
    result: 'Готовый иск / жалоба / претензия с правовым обоснованием',
    price: 'от 8 000 ₽',
    includes: ['Исковое заявление', 'Апелляционная / кассационная жалоба', 'Досудебная претензия', 'Ходатайства и заявления'],
  },
  {
    icon: 'Gavel',
    num: '04',
    title: 'Ведение дела',
    desc: 'Полное судебное представительство. Ведём дело от подачи иска до получения исполнительного листа и взыскания.',
    result: 'Решение суда в вашу пользу, контроль исполнения',
    price: 'от 25 000 ₽',
    includes: ['Представительство в судебных заседаниях', 'Подготовка всех процессуальных документов', 'Взаимодействие с судом и приставами', 'Контроль исполнения решения'],
  },
  {
    icon: 'RefreshCw',
    num: '05',
    title: 'Апелляция',
    desc: 'Обжалование решений суда первой инстанции. Работаем с апелляционными и кассационными жалобами, добиваемся пересмотра несправедливых решений.',
    result: 'Отмена или изменение решения суда',
    price: 'от 15 000 ₽',
    includes: ['Анализ решения суда первой инстанции', 'Апелляционная жалоба', 'Кассационная жалоба', 'Представительство в вышестоящих судах'],
  },
];

export default function Services() {
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
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>формат работы</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white mb-6" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
            Услуги
          </h1>
          <p className="font-golos text-[16px] leading-relaxed max-w-2xl" style={{ color: PROSE }}>
            Пять форматов работы — от первичной консультации до полного ведения дела. Каждый с чётким результатом и прозрачной стоимостью.
          </p>
        </div>
      </section>

      {/* Услуги */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 space-y-6">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="p-8"
              style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.1)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Num + icon */}
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                  <span className="font-cormorant text-[48px] font-light leading-none" style={{ color: 'rgba(200,163,95,0.18)' }}>{s.num}</span>
                  <div className="w-10 h-10 flex items-center justify-center" style={{ border: `1px solid rgba(200,163,95,0.25)`, color: G }}>
                    <Icon name={s.icon} size={17} />
                  </div>
                </div>

                {/* Title + desc */}
                <div className="lg:col-span-4">
                  <h2 className="font-cormorant font-semibold text-white text-[28px] mb-3">{s.title}</h2>
                  <p className="font-golos text-[13px] leading-relaxed mb-4" style={{ color: PROSE }}>{s.desc}</p>
                  <div className="p-3" style={{ background: 'rgba(200,163,95,0.05)', border: '1px solid rgba(200,163,95,0.12)' }}>
                    <span className="font-golos text-[11px] tracking-[0.15em] uppercase" style={{ color: MUTED }}>Результат: </span>
                    <span className="font-golos text-[13px]" style={{ color: PROSE }}>{s.result}</span>
                  </div>
                </div>

                {/* Includes */}
                <div className="lg:col-span-4">
                  <div className="font-golos text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: G }}>Включает</div>
                  <ul className="space-y-2">
                    {s.includes.map((it) => (
                      <li key={it} className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: G }} />
                        <span className="font-golos text-[13px]" style={{ color: PROSE }}>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price + CTA */}
                <div className="lg:col-span-3 flex flex-col justify-between">
                  <div className="text-right">
                    <div className="font-golos text-[11px] tracking-[0.2em] uppercase mb-1" style={{ color: MUTED }}>стоимость</div>
                    <div className="font-cormorant font-semibold text-[32px]" style={{ color: G }}>{s.price}</div>
                  </div>
                  <BtnPrimary to="/contacts" className="w-full text-center">Получить консультацию</BtnPrimary>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
