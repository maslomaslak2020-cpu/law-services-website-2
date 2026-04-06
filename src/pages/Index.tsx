import { useState } from 'react';
import Layout from '@/components/Layout';
import BtnPrimary from '@/components/ui/BtnPrimary';
import BtnSecondary from '@/components/ui/BtnSecondary';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import SituationModal from '@/components/SituationModal';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

const PRACTICE = [
  { icon: 'Car', title: 'Страховые споры', desc: 'ОСАГО, КАСКО, занижение выплат' },
  { icon: 'AlertTriangle', title: 'Споры по ДТП', desc: 'Возмещение ущерба и убытков' },
  { icon: 'ShieldCheck', title: 'Защита прав потребителей', desc: 'Возврат, расторжение, компенсации' },
  { icon: 'Gavel', title: 'Судебное представительство', desc: 'Ведение дел в судах любой инстанции' },
  { icon: 'FileText', title: 'Договорная работа', desc: 'Договоры, претензии, правовая экспертиза' },
  { icon: 'Briefcase', title: 'Сопровождение бизнеса', desc: 'Юридический аутсорсинг компаний' },
  { icon: 'Heart', title: 'Семейные споры', desc: 'Развод, раздел имущества, алименты' },
  { icon: 'Scale', title: 'Административные споры', desc: 'Оспаривание решений органов власти' },
];

const SERVICES = [
  { num: '01', title: 'Консультация', desc: 'Анализ ситуации, оценка перспектив, правовая позиция' },
  { num: '02', title: 'Анализ документов', desc: 'Экспертиза договоров, решений, доказательной базы' },
  { num: '03', title: 'Подготовка иска', desc: 'Исковое заявление, жалобы, претензии, ходатайства' },
  { num: '04', title: 'Ведение дела', desc: 'Представительство в суде и переговорах' },
  { num: '05', title: 'Апелляция', desc: 'Обжалование решений в вышестоящих инстанциях' },
];

const ADVANTAGES = [
  { icon: 'Search', title: 'Анализ до начала работы', desc: 'Формируем правовую позицию до старта, вы знаете перспективы заранее' },
  { icon: 'Ban', title: 'Не берём безнадёжные дела', desc: 'Если шансов нет — скажем честно, не будем тратить ваши деньги' },
  { icon: 'FileCheck', title: 'Прозрачные условия', desc: 'Договор, чёткое ТЗ и фиксированная стоимость без скрытых платежей' },
  { icon: 'Lock', title: 'Конфиденциальность', desc: 'Полная юридическая тайна. Ваши данные под защитой на каждом этапе' },
];

const CASES = [
  {
    tag: 'Страховые споры',
    title: 'Занижение выплаты по ОСАГО на 340 000 ₽',
    result: 'Взыскали полную сумму + штраф + неустойку',
    amount: '487 000 ₽',
  },
  {
    tag: 'Защита бизнеса',
    title: 'Оспаривание договора поставки на 1,2 млн ₽',
    result: 'Договор признан недействительным, деньги возвращены',
    amount: '1 200 000 ₽',
  },
  {
    tag: 'Взыскание долга',
    title: 'Взыскание задолженности с контрагента',
    result: 'Арест активов, полное погашение долга',
    amount: '780 000 ₽',
  },
];

const STEPS = [
  { n: '01', title: 'Анализ', desc: 'Изучаем ситуацию, документы и судебную практику' },
  { n: '02', title: 'Стратегия', desc: 'Формируем правовую позицию и план действий' },
  { n: '03', title: 'Документы', desc: 'Готовим иски, претензии, жалобы, договоры' },
  { n: '04', title: 'Ведение дела', desc: 'Представляем интересы в суде и переговорах' },
  { n: '05', title: 'Результат', desc: 'Добиваемся исполнения решения и закрываем дело' },
];

const PRICING = [
  { title: 'Консультация', price: 'от 2 000 ₽', desc: 'Устная или письменная, с анализом перспектив' },
  { title: 'Анализ документов', price: 'от 3 000 ₽', desc: 'Экспертиза договоров и доказательной базы' },
  { title: 'Подготовка иска', price: 'от 8 000 ₽', desc: 'Исковое заявление с правовым обоснованием' },
  { title: 'Ведение дела', price: 'от 25 000 ₽', desc: 'Полное представительство в суде' },
];

export default function Index() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      {showModal && <SituationModal onClose={() => setShowModal(false)} />}
      {/* БЛОК 1: HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${DEEP} 0%, ${NAVY} 55%, #102240 100%)` }}
      >
        {/* Декор линии */}
        <div className="absolute top-0 bottom-0 left-[10%] w-px hidden lg:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,163,95,0.1), transparent)' }} />
        <div className="absolute top-0 bottom-0 right-[8%] w-px hidden lg:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,163,95,0.07), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,163,95,0.35), transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end min-h-[calc(100vh-7rem)]">

            {/* LEFT */}
            <div className="py-10 lg:py-20">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-px" style={{ backgroundColor: G }} />
                <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>
                  Таганрог · Ростовская область · Вся Россия
                </span>
              </div>

              <h1 className="font-cormorant font-semibold text-white leading-[1.05] mb-5"
                style={{ fontSize: 'clamp(42px, 6vw, 82px)' }}>
                Юридическая помощь бизнесу и гражданам
              </h1>

              <h2 className="font-cormorant font-normal leading-snug mb-8"
                style={{ fontSize: 'clamp(18px, 2.2vw, 28px)', color: 'rgba(200,163,95,0.85)' }}>
                С формированием правовой позиции и доведением до результата
              </h2>

              <div className="flex items-center gap-4 mb-7">
                <div className="w-10 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
                <p className="font-golos text-[14px]" style={{ color: PROSE }}>
                  Суды · Споры · Договоры · Страховые споры (ОСАГО, КАСКО) · Взыскание задолженности
                </p>
              </div>

              <h3 className="font-golos font-medium mb-9 tracking-wide"
                style={{ fontSize: '13px', color: MUTED }}>
                Работаем под задачу:&nbsp;
                <span className="font-semibold" style={{ color: G }}>Анализ</span>
                <span style={{ color: 'rgba(200,163,95,0.35)' }}> → </span>
                <span className="font-semibold" style={{ color: G }}>Стратегия</span>
                <span style={{ color: 'rgba(200,163,95,0.35)' }}> → </span>
                <span className="font-semibold" style={{ color: G }}>Результат</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-11">
                {[
                  { icon: 'MapPin', text: 'Работаем по Таганрогу, РО и всей России' },
                  { icon: 'FileCheck', text: 'Прозрачные условия и договор' },
                  { icon: 'Target', text: 'Правовая позиция до начала работы' },
                  { icon: 'TrendingUp', text: 'Ведём дело до результата, не процесса' },
                ].map((m) => (
                  <div key={m.text} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-sm flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(200,163,95,0.1)' }}>
                      <Icon name={m.icon} size={13} style={{ color: G }} />
                    </div>
                    <span className="font-golos text-[13px]" style={{ color: PROSE }}>{m.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <BtnPrimary to="/contacts">Получить консультацию</BtnPrimary>
                <button
                  onClick={() => setShowModal(true)}
                  className="font-golos font-semibold px-8 py-4 inline-block transition-all duration-200 text-[15px] tracking-wide"
                  style={{ border: '1px solid rgba(200,163,95,0.45)', color: G }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#C8A35F')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.45)')}
                >
                  Разобрать мою ситуацию
                </button>
              </div>
            </div>

            {/* RIGHT — фото */}
            <div className="hidden lg:flex items-end justify-center relative h-full">
              <div className="absolute bottom-0 right-6" style={{ width: '88%', height: '92%', border: '1px solid rgba(200,163,95,0.18)', borderRadius: '2px', pointerEvents: 'none', zIndex: 0 }} />
              <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: '200px', background: `linear-gradient(to top, ${NAVY} 0%, transparent 100%)` }} />
              <img
                src="https://cdn.poehali.dev/projects/0d134cb7-7343-460d-aae4-64c5093bf8df/bucket/470457f9-72cd-40e9-a5ab-01c608cfeb45.jpg"
                alt="Юрист Право Привилегия"
                className="relative z-[5] w-full object-cover object-top"
                style={{
                  maxHeight: 'calc(100vh - 64px)',
                  maskImage: 'linear-gradient(to top, transparent 0%, black 18%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 18%)',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* БЛОК 2: Сегментация */}
      <section style={{ background: DEEP, borderBottom: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
              <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>кому нужна помощь</span>
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
            </div>
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
              Работаем с бизнесом и физическими лицами
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Briefcase',
                title: 'Бизнесу',
                desc: 'Юридическое сопровождение компаний: договорная работа, корпоративные споры, банкротство, защита от убытков, претензионная деятельность.',
                items: ['Договоры и сделки', 'Корпоративные споры', 'Банкротство и ликвидация', 'Взыскание задолженностей'],
              },
              {
                icon: 'User',
                title: 'Физическим лицам',
                desc: 'Защита прав граждан: страховые споры, ДТП, семейные дела, защита потребителей, административные разбирательства.',
                items: ['Страховые споры (ОСАГО/КАСКО)', 'Споры по ДТП', 'Семейные споры', 'Защита прав потребителей'],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-8 group cursor-default"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(200,163,95,0.1)' }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center" style={{ border: `1px solid rgba(200,163,95,0.3)`, color: G }}>
                    <Icon name={card.icon} size={20} />
                  </div>
                  <h3 className="font-cormorant font-semibold text-white text-[28px]">{card.title}</h3>
                </div>
                <p className="font-golos text-[14px] leading-relaxed mb-6" style={{ color: PROSE }}>{card.desc}</p>
                <ul className="space-y-2 mb-7">
                  {card.items.map((it) => (
                    <li key={it} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: G }} />
                      <span className="font-golos text-[13px]" style={{ color: MUTED }}>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/practice"
                  className="inline-flex items-center gap-2 font-golos text-[13px] font-medium transition-opacity hover:opacity-75"
                  style={{ color: G }}
                >
                  {card.title === 'Бизнесу' ? 'Практика для бизнеса' : 'Практика для граждан'}
                  <Icon name="ArrowRight" size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 3: Практика */}
      <section style={{ background: NAVY, borderBottom: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: G }} />
                <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>направления практики</span>
              </div>
              <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
                Что мы решаем
              </h2>
            </div>
            <BtnSecondary to="/practice">Перейти в практику</BtnSecondary>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRACTICE.map((p) => (
              <div
                key={p.title}
                className="p-6 cursor-default"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(200,163,95,0.08)' }}
              >
                <div className="w-9 h-9 flex items-center justify-center mb-4" style={{ color: G, border: '1px solid rgba(200,163,95,0.2)' }}>
                  <Icon name={p.icon} size={16} />
                </div>
                <div className="font-golos font-semibold text-white text-[14px] mb-1">{p.title}</div>
                <div className="font-golos text-[12px]" style={{ color: MUTED }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 4: Услуги */}
      <section style={{ background: DEEP, borderBottom: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: G }} />
                <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>формат работы</span>
              </div>
              <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
                Услуги
              </h2>
            </div>
            <BtnSecondary to="/services">Смотреть услуги</BtnSecondary>
          </div>

          <div className="space-y-px">
            {SERVICES.map((s, i) => (
              <div
                key={s.num}
                className="flex items-start gap-8 p-6 group"
                style={{
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  border: '1px solid rgba(200,163,95,0.07)',
                  marginBottom: '4px',
                }}
              >
                <div className="font-cormorant text-[36px] font-light shrink-0 leading-none" style={{ color: 'rgba(200,163,95,0.2)' }}>
                  {s.num}
                </div>
                <div>
                  <div className="font-golos font-semibold text-white text-[16px] mb-1">{s.title}</div>
                  <div className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 5: Преимущества */}
      <section style={{ background: NAVY, borderBottom: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
              <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>почему выбирают нас</span>
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
            </div>
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
              Наш подход
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="p-6" style={{ border: '1px solid rgba(200,163,95,0.1)' }}>
                <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(200,163,95,0.08)', color: G }}>
                  <Icon name={a.icon} size={18} />
                </div>
                <div className="font-golos font-semibold text-white text-[14px] mb-2">{a.title}</div>
                <div className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{a.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <BtnPrimary to="/contacts">Разобрать мою ситуацию</BtnPrimary>
          </div>
        </div>
      </section>

      {/* БЛОК 6: Кейсы */}
      <section style={{ background: DEEP, borderBottom: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: G }} />
                <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>результаты</span>
              </div>
              <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
                Кейсы
              </h2>
            </div>
            <BtnSecondary to="/cases">Смотреть кейсы</BtnSecondary>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CASES.map((c) => (
              <div key={c.title} className="p-7" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(200,163,95,0.1)' }}>
                <div className="font-golos text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: G }}>
                  {c.tag}
                </div>
                <div className="font-golos font-semibold text-white text-[15px] leading-snug mb-4">
                  {c.title}
                </div>
                <div className="font-golos text-[13px] leading-relaxed mb-5" style={{ color: PROSE }}>
                  {c.result}
                </div>
                <div
                  className="font-cormorant font-semibold text-[28px]"
                  style={{ color: G }}
                >
                  {c.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 7: Как работаем */}
      <section style={{ background: NAVY, borderBottom: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
              <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>процесс</span>
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
            </div>
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
              Как мы работаем
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] right-0 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.15)' }} />
                )}
                <div
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center font-cormorant font-semibold text-[18px]"
                  style={{ border: `1px solid rgba(200,163,95,0.35)`, color: G }}
                >
                  {s.n}
                </div>
                <div className="font-golos font-semibold text-white text-[14px] mb-2">{s.title}</div>
                <div className="font-golos text-[12px] leading-relaxed" style={{ color: MUTED }}>{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <BtnPrimary to="/contacts">Получить консультацию</BtnPrimary>
          </div>
        </div>
      </section>

      {/* БЛОК 8: Стоимость */}
      <section style={{ background: DEEP, borderBottom: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: G }} />
                <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>прозрачная стоимость</span>
              </div>
              <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
                Стоимость услуг
              </h2>
            </div>
            <BtnSecondary to="/pricing">Узнать стоимость</BtnSecondary>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {PRICING.map((p) => (
              <div key={p.title} className="p-6" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(200,163,95,0.1)' }}>
                <div className="font-golos font-semibold text-white text-[14px] mb-3">{p.title}</div>
                <div className="font-cormorant font-semibold mb-3" style={{ fontSize: '26px', color: G }}>{p.price}</div>
                <div className="font-golos text-[12px] leading-relaxed" style={{ color: MUTED }}>{p.desc}</div>
              </div>
            ))}
          </div>

          <div className="p-6" style={{ background: 'rgba(200,163,95,0.05)', border: '1px solid rgba(200,163,95,0.15)' }}>
            <div className="flex flex-wrap items-center gap-8">
              {['Фиксированная цена в договоре', 'Поэтапная оплата', 'Процент от результата (по согласованию)'].map((it) => (
                <div key={it} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: G }} />
                  <span className="font-golos text-[13px]" style={{ color: PROSE }}>{it}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 9: Финальный CTA */}
      <section
        style={{
          background: `linear-gradient(135deg, ${DEEP} 0%, ${NAVY} 100%)`,
          borderTop: '1px solid rgba(200,163,95,0.12)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
            <div className="w-2 h-2 rotate-45" style={{ backgroundColor: G }} />
            <div className="w-16 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
          </div>
          <h2 className="font-cormorant font-semibold text-white mb-4" style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}>
            Опишите ситуацию — предложим решение
          </h2>
          <p className="font-golos text-[15px] leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: PROSE }}>
            Бесплатная первичная консультация. Анализируем перспективы и формируем правовую позицию до начала работы.
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