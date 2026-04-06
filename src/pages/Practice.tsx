import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import SituationModal from '@/components/SituationModal';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

const ALL_AREAS = [
  {
    num: '01',
    icon: 'Car',
    title: 'Страховые споры (ОСАГО, КАСКО)',
    for: 'citizens',
    problem: 'Страховая компания занижает выплату, затягивает сроки или отказывает в возмещении без законных оснований.',
    actions: [
      'Проводим независимую экспертизу',
      'Направляем досудебную претензию',
      'При необходимости подаём иск',
      'Взыскиваем ущерб, штраф 50% и неустойку',
    ],
    result: 'Клиент получает полную страховую выплату + штраф за незаконный отказ + неустойку за просрочку.',
  },
  {
    num: '02',
    icon: 'AlertTriangle',
    title: 'Споры по ДТП и возмещению ущерба',
    for: 'citizens',
    problem: 'Виновник скрылся, страховая недоплатила, или причинён вред здоровью без компенсации.',
    actions: [
      'Устанавливаем виновника',
      'Формируем доказательную базу',
      'Ведём переговоры и судебное взыскание',
    ],
    result: 'Возмещение материального ущерба, вреда здоровью, утраченного заработка и морального вреда.',
  },
  {
    num: '03',
    icon: 'ShieldCheck',
    title: 'Защита прав потребителей',
    for: 'citizens',
    problem: 'Продавец отказал в возврате, застройщик нарушил сроки, банк списал деньги незаконно.',
    actions: [
      'Составляем претензию',
      'Собираем доказательства',
      'Подаём иск с требованием неустойки, штрафа и компенсации',
    ],
    result: 'Возврат денег, неустойка за просрочку, штраф 50% в пользу потребителя по Закону о защите прав потребителей.',
  },
  {
    num: '04',
    icon: 'Gavel',
    title: 'Судебное представительство',
    for: 'both',
    problem: 'Нужен профессиональный представитель в суде общей юрисдикции или арбитражном суде.',
    actions: [
      'Изучаем материалы дела',
      'Формируем правовую позицию',
      'Готовим документы',
      'Участвуем в заседаниях',
    ],
    result: 'Профессиональная защита интересов на всех стадиях судебного процесса — от подачи иска до исполнения решения.',
  },
  {
    num: '05',
    icon: 'FileText',
    title: 'Договорная работа и претензии',
    for: 'both',
    problem: 'Контрагент нарушил договор, нужно составить претензию или защититься от необоснованных требований.',
    actions: [
      'Анализируем договор, выявляем нарушения',
      'Готовим претензию или правовую позицию для ответа',
    ],
    result: 'Урегулирование спора в досудебном порядке или сформированная база для судебного взыскания.',
  },
  {
    num: '06',
    icon: 'Briefcase',
    title: 'Юридическое сопровождение бизнеса',
    for: 'business',
    problem: 'Бизнесу нужна системная юридическая поддержка без содержания штатного юриста.',
    actions: [
      'Ведём договорную работу',
      'Даём консультации',
      'Представляем интересы в спорах',
      'Проверяем контрагентов',
    ],
    result: 'Защита бизнеса от правовых рисков, снижение претензионной нагрузки, уверенность в каждом решении.',
  },
  {
    num: '07',
    icon: 'Heart',
    title: 'Семейные споры',
    for: 'citizens',
    problem: 'Развод, раздел совместно нажитого имущества, споры об алиментах или воспитании детей.',
    actions: [
      'Оцениваем состав имущества',
      'Формируем позицию',
      'Ведём переговоры или судебный процесс',
    ],
    result: 'Справедливый раздел имущества, установление алиментов, защита интересов детей.',
  },
  {
    num: '08',
    icon: 'Scale',
    title: 'Административные споры (КАС РФ)',
    for: 'both',
    problem: 'Незаконные действия или бездействие государственных органов, нарушение прав граждан.',
    actions: [
      'Подаём административный иск',
      'Обжалуем решения органов власти',
      'Представляем интересы в суде',
    ],
    result: 'Признание действий органов незаконными, восстановление нарушенных прав, взыскание компенсации.',
  },
];

type Filter = 'all' | 'business' | 'citizens';

export default function Practice() {
  const [filter, setFilter] = useState<Filter>('all');
  const [showModal, setShowModal] = useState(false);

  const visible = ALL_AREAS.filter(a =>
    filter === 'all' || a.for === filter || a.for === 'both'
  );

  return (
    <Layout>
      {showModal && <SituationModal onClose={() => setShowModal(false)} />}

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: `linear-gradient(160deg, ${DEEP} 0%, ${NAVY} 100%)`, borderBottom: '1px solid rgba(200,163,95,0.12)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>направления</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white mb-4" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
            Практика
          </h1>
          <p className="font-golos text-[15px] leading-relaxed max-w-2xl mb-10" style={{ color: PROSE }}>
            Работаем только в тех областях, где накоплен реальный опыт. Для каждого направления — чёткая стратегия и измеримый результат.
          </p>

          {/* Фильтр */}
          <div className="flex flex-wrap gap-3">
            {([
              { key: 'all', label: 'Все направления' },
              { key: 'business', label: 'Практика для бизнеса' },
              { key: 'citizens', label: 'Практика для граждан' },
            ] as { key: Filter; label: string }[]).map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className="font-golos text-[13px] font-medium px-6 py-2.5 transition-all duration-200"
                style={{
                  background: filter === tab.key ? G : 'transparent',
                  color: filter === tab.key ? DEEP : G,
                  border: `1px solid ${filter === tab.key ? G : 'rgba(200,163,95,0.35)'}`,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Направления */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-5">
          {visible.map((a, i) => (
            <div
              key={a.num}
              className="p-8"
              style={{
                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : NAVY,
                border: '1px solid rgba(200,163,95,0.1)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Заголовок */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-cormorant font-light text-[40px] leading-none" style={{ color: 'rgba(200,163,95,0.2)' }}>
                      {a.num}
                    </span>
                    <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ border: `1px solid rgba(200,163,95,0.3)`, color: G }}>
                      <Icon name={a.icon} size={16} />
                    </div>
                  </div>
                  <h2 className="font-golos font-semibold text-white text-[16px] leading-snug mb-4">{a.title}</h2>
                  <div className="font-golos text-[11px] tracking-[0.15em] uppercase mb-1" style={{ color: MUTED }}>Проблема</div>
                  <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{a.problem}</p>
                </div>

                {/* Действия */}
                <div>
                  <div className="font-golos text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: G }}>Действия юриста</div>
                  <ul className="space-y-2.5">
                    {a.actions.map((act) => (
                      <li key={act} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: G }} />
                        <span className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Результат + CTA */}
                <div className="flex flex-col justify-between gap-5">
                  <div className="p-4" style={{ background: 'rgba(200,163,95,0.06)', border: '1px solid rgba(200,163,95,0.15)' }}>
                    <div className="font-golos text-[11px] tracking-[0.2em] uppercase mb-2" style={{ color: G }}>Результат</div>
                    <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{a.result}</p>
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="font-golos font-semibold text-[13px] py-3.5 px-6 transition-opacity hover:opacity-85 text-center"
                    style={{ background: G, color: DEEP }}
                  >
                    Разобрать мою ситуацию
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
