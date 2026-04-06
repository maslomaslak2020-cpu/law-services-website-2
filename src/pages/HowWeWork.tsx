import Layout from '@/components/Layout';
import BtnPrimary from '@/components/ui/BtnPrimary';
import Icon from '@/components/ui/icon';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

const STEPS = [
  {
    n: '01',
    icon: 'MessageCircle',
    title: 'Анализ ситуации',
    desc: 'Вы описываете проблему — устно или письменно. Мы изучаем документы, анализируем судебную практику и оцениваем перспективы.',
    format: 'Консультация онлайн или очно',
    duration: '1–2 дня',
    result: 'Правовая позиция и оценка шансов',
  },
  {
    n: '02',
    icon: 'Map',
    title: 'Стратегия',
    desc: 'Формируем план действий: какой путь выбрать, какие аргументы использовать, какие риски учесть. Всё — до подписания договора.',
    format: 'Письменное заключение',
    duration: '1–3 дня',
    result: 'Стратегия защиты, план действий',
  },
  {
    n: '03',
    icon: 'FileText',
    title: 'Документы',
    desc: 'Готовим все необходимые документы: иски, претензии, жалобы, ходатайства. Каждый документ — с детальным правовым обоснованием.',
    format: 'Комплект процессуальных документов',
    duration: '3–7 дней',
    result: 'Готовые документы для подачи в суд',
  },
  {
    n: '04',
    icon: 'Gavel',
    title: 'Ведение дела',
    desc: 'Представляем ваши интересы в суде, переговорах, общении с госорганами. Участвуем во всех заседаниях, оперативно реагируем на события.',
    format: 'Очно или дистанционно (по всей России)',
    duration: 'Весь период дела',
    result: 'Представительство на каждом этапе',
  },
  {
    n: '05',
    icon: 'CheckCircle',
    title: 'Результат',
    desc: 'Получаем решение суда, контролируем его исполнение. Работаем до фактического получения вами денег или защиты прав.',
    format: 'Исполнительный лист, приставы',
    duration: 'До фактического исполнения',
    result: 'Деньги на счету или восстановленные права',
  },
];

const FORMATS = [
  {
    icon: 'MapPin',
    title: 'Очно в Таганроге',
    desc: 'Офис в Таганроге. Встречи, подписание документов, участие в судах Ростовской области.',
  },
  {
    icon: 'Globe',
    title: 'Дистанционно',
    desc: 'Документы по электронной почте. Консультации в мессенджерах и по видеосвязи. Ведение дел по всей России.',
  },
  {
    icon: 'Clock',
    title: 'Оперативно',
    desc: 'Срочные ситуации — в приоритете. Можем подключиться к делу даже на этапе апелляции.',
  },
];

export default function HowWeWork() {
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
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>процесс</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white mb-6" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
            Как мы работаем
          </h1>
          <p className="font-golos text-[16px] leading-relaxed max-w-2xl" style={{ color: PROSE }}>
            Пять этапов — от первого звонка до получения результата. Каждый этап понятен, предсказуем и контролируем.
          </p>
        </div>
      </section>

      {/* Этапы */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 space-y-4">
          {STEPS.map((s) => (
            <div key={s.n} className="p-8" style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.1)' }}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="font-cormorant text-[56px] font-light leading-none" style={{ color: 'rgba(200,163,95,0.15)' }}>{s.n}</div>
                </div>
                <div className="lg:col-span-1 flex items-start justify-start lg:justify-center pt-1">
                  <div className="w-10 h-10 flex items-center justify-center" style={{ border: `1px solid rgba(200,163,95,0.3)`, color: G }}>
                    <Icon name={s.icon} size={17} />
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="font-cormorant font-semibold text-white text-[26px] mb-3">{s.title}</h2>
                  <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{s.desc}</p>
                </div>
                <div className="lg:col-span-3 space-y-3">
                  <div>
                    <div className="font-golos text-[11px] tracking-[0.15em] uppercase mb-1" style={{ color: MUTED }}>Формат</div>
                    <div className="font-golos text-[13px]" style={{ color: PROSE }}>{s.format}</div>
                  </div>
                  <div>
                    <div className="font-golos text-[11px] tracking-[0.15em] uppercase mb-1" style={{ color: MUTED }}>Срок</div>
                    <div className="font-golos text-[13px]" style={{ color: PROSE }}>{s.duration}</div>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="p-4 h-full" style={{ background: 'rgba(200,163,95,0.06)', border: '1px solid rgba(200,163,95,0.15)' }}>
                    <div className="font-golos text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: G }}>Результат этапа</div>
                    <div className="font-golos text-[13px]" style={{ color: PROSE }}>{s.result}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Форматы */}
      <section style={{ background: NAVY, borderTop: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
              <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>форматы</span>
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
            </div>
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(26px, 3vw, 42px)' }}>
              Удобный для вас формат
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {FORMATS.map((f) => (
              <div key={f.title} className="p-7 text-center" style={{ border: '1px solid rgba(200,163,95,0.1)' }}>
                <div className="w-12 h-12 mx-auto flex items-center justify-center mb-4" style={{ border: `1px solid rgba(200,163,95,0.3)`, color: G }}>
                  <Icon name={f.icon} size={20} />
                </div>
                <div className="font-golos font-semibold text-white text-[15px] mb-2">{f.title}</div>
                <div className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <BtnPrimary to="/contacts">Получить консультацию</BtnPrimary>
          </div>
        </div>
      </section>
    </Layout>
  );
}
