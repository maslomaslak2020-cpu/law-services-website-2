import Layout from '@/components/Layout';
import BtnPrimary from '@/components/ui/BtnPrimary';
import Icon from '@/components/ui/icon';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

const AREAS = [
  {
    icon: 'Car',
    title: 'Страховые споры',
    subtitle: 'ОСАГО, КАСКО, занижение выплат',
    problem: 'Страховая компания занизила выплату, отказала в возмещении или затягивает сроки выплаты.',
    actions: [
      'Анализ документов и расчёт реального ущерба',
      'Направление досудебной претензии',
      'Подача иска, взыскание страховки + штрафа + неустойки',
      'Контроль исполнения решения суда',
    ],
    result: 'Взыскание полной суммы ущерба, штрафа 50% по ЗоЗПП и неустойки за просрочку',
  },
  {
    icon: 'AlertTriangle',
    title: 'Споры по ДТП',
    subtitle: 'Возмещение ущерба от виновника',
    problem: 'Виновник ДТП скрылся, нет страховки или страховое покрытие не покрывает реальный ущерб.',
    actions: [
      'Оформление документов и сбор доказательств',
      'Взаимодействие с РСА и страховыми компаниями',
      'Иск к виновнику на сумму сверх страхового возмещения',
      'Взыскание морального вреда',
    ],
    result: 'Полное возмещение ущерба, включая утрату товарной стоимости и дополнительные расходы',
  },
  {
    icon: 'ShieldCheck',
    title: 'Защита прав потребителей',
    subtitle: 'Возврат, расторжение, компенсации',
    problem: 'Продавец отказывает в возврате, застройщик нарушает сроки, некачественная услуга или товар.',
    actions: [
      'Претензия продавцу / исполнителю',
      'Экспертиза качества товара или услуги',
      'Исковое заявление + штраф 50% по ЗоЗПП',
      'Взыскание неустойки и морального вреда',
    ],
    result: 'Возврат денег, расторжение договора, компенсация всех потерь + штраф',
  },
  {
    icon: 'Gavel',
    title: 'Судебное представительство',
    subtitle: 'Ведение дел в судах любой инстанции',
    problem: 'Вам нужен профессиональный представитель в суде — арбитраже, общей юрисдикции, апелляции.',
    actions: [
      'Полный анализ дела и формирование стратегии',
      'Подготовка процессуальных документов',
      'Участие во всех судебных заседаниях',
      'Обжалование в апелляционной и кассационной инстанциях',
    ],
    result: 'Профессиональная защита ваших интересов от первой инстанции до исполнения решения',
  },
  {
    icon: 'FileText',
    title: 'Договорная работа',
    subtitle: 'Договоры, претензии, правовая экспертиза',
    problem: 'Нужно составить, проверить или расторгнуть договор, взыскать долг по договору.',
    actions: [
      'Правовая экспертиза договора',
      'Разработка или редактирование договора',
      'Досудебная претензия контрагенту',
      'Судебное взыскание по договору',
    ],
    result: 'Юридически чистый договор или успешное взыскание по нарушенному',
  },
  {
    icon: 'Briefcase',
    title: 'Сопровождение бизнеса',
    subtitle: 'Юридический аутсорсинг',
    problem: 'Компании нужна постоянная юридическая поддержка без штатного юриста.',
    actions: [
      'Абонентское юридическое обслуживание',
      'Проверка контрагентов',
      'Сопровождение сделок и переговоров',
      'Защита в корпоративных спорах',
    ],
    result: 'Снижение юридических рисков и защита активов бизнеса',
  },
  {
    icon: 'Heart',
    title: 'Семейные споры',
    subtitle: 'Развод, раздел имущества, алименты',
    problem: 'Расторжение брака, раздел совместно нажитого имущества или взыскание алиментов.',
    actions: [
      'Анализ имущественных прав и раздел активов',
      'Соглашение или иск о разделе имущества',
      'Взыскание алиментов, изменение размера',
      'Определение места жительства детей',
    ],
    result: 'Справедливый раздел имущества, взыскание алиментов, защита интересов детей',
  },
  {
    icon: 'Scale',
    title: 'Административные споры',
    subtitle: 'Оспаривание решений органов власти (КАС РФ)',
    problem: 'Незаконный штраф, отказ госоргана, нарушение прав со стороны администрации.',
    actions: [
      'Анализ законности действий органа власти',
      'Жалоба в вышестоящий орган',
      'Административный иск по КАС РФ',
      'Взыскание компенсации и убытков',
    ],
    result: 'Отмена незаконного решения, восстановление прав, компенсация ущерба',
  },
];

export default function Practice() {
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
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>направления</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white mb-6" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
            Практика
          </h1>
          <p className="font-golos text-[16px] leading-relaxed max-w-2xl" style={{ color: PROSE }}>
            8 направлений. В каждом — чёткая стратегия, понятный процесс и ориентация на результат.
          </p>
        </div>
      </section>

      {/* Направления */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 space-y-6">
          {AREAS.map((a, i) => (
            <div
              key={a.title}
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
                    <div className="w-10 h-10 flex items-center justify-center" style={{ border: `1px solid rgba(200,163,95,0.3)`, color: G }}>
                      <Icon name={a.icon} size={18} />
                    </div>
                    <div>
                      <div className="font-golos font-semibold text-white text-[15px]">{a.title}</div>
                      <div className="font-golos text-[12px]" style={{ color: MUTED }}>{a.subtitle}</div>
                    </div>
                  </div>
                  <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>
                    <span className="font-medium" style={{ color: MUTED }}>Ситуация: </span>
                    {a.problem}
                  </p>
                </div>

                {/* Действия */}
                <div>
                  <div className="font-golos text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: G }}>Что делаем</div>
                  <ul className="space-y-2">
                    {a.actions.map((act) => (
                      <li key={act} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: G }} />
                        <span className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Результат + CTA */}
                <div className="flex flex-col justify-between">
                  <div className="p-4 mb-5" style={{ background: 'rgba(200,163,95,0.06)', border: '1px solid rgba(200,163,95,0.15)' }}>
                    <div className="font-golos text-[11px] tracking-[0.2em] uppercase mb-2" style={{ color: G }}>Результат</div>
                    <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{a.result}</p>
                  </div>
                  <BtnPrimary to="/contacts">Разобрать мою ситуацию</BtnPrimary>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
