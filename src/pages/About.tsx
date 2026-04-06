import Layout from '@/components/Layout';
import BtnPrimary from '@/components/ui/BtnPrimary';
import BtnSecondary from '@/components/ui/BtnSecondary';
import Icon from '@/components/ui/icon';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

const PRINCIPLES = [
  { icon: 'Target', title: 'Правовая позиция до старта', desc: 'Перед началом работы вы получаете чёткое понимание перспектив, рисков и стратегии.' },
  { icon: 'Ban', title: 'Не берём безнадёжные дела', desc: 'Честно говорим, если шансов нет. Не тратим ваши деньги на бесполезные процессы.' },
  { icon: 'TrendingUp', title: 'Результат, не процесс', desc: 'Цель — выигранное дело и исполнение решения, а не затягивание ради гонорара.' },
  { icon: 'FileCheck', title: 'Договор и прозрачность', desc: 'Всё фиксируем в договоре: объём, стоимость, сроки, ответственность сторон.' },
  { icon: 'Lock', title: 'Конфиденциальность', desc: 'Полная юридическая тайна. Ваши данные и детали дела не передаются третьим лицам.' },
  { icon: 'Globe', title: 'Работаем по всей России', desc: 'Офис в Таганроге, дела ведём по Ростовской области и дистанционно по всей стране.' },
];

export default function About() {
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
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>о компании</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white mb-6" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
            Право Привилегия
          </h1>
          <p className="font-golos text-[16px] leading-relaxed max-w-2xl" style={{ color: PROSE }}>
            Юридическая компания, специализирующаяся на судебных спорах, защите бизнеса и граждан. Работаем в Таганроге, по Ростовской области и по всей России онлайн.
          </p>
        </div>
      </section>

      {/* О практике */}
      <section style={{ background: DEEP, borderBottom: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ backgroundColor: G }} />
                <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>наша практика</span>
              </div>
              <h2 className="font-cormorant font-semibold text-white mb-6" style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}>
                Юридическая помощь через правовую позицию
              </h2>
              <div className="space-y-4" style={{ color: PROSE }}>
                <p className="font-golos text-[14px] leading-relaxed">
                  Мы работаем иначе: прежде чем взяться за дело, формируем правовую позицию. Это значит — вы знаете шансы, риски и стратегию ещё до подписания договора.
                </p>
                <p className="font-golos text-[14px] leading-relaxed">
                  Основное направление — судебные споры и взыскания. Страховые дела, защита потребителей, корпоративные конфликты, семейные споры. Ведём дело от консультации до исполнения решения.
                </p>
                <p className="font-golos text-[14px] leading-relaxed">
                  Работаем с физическими лицами, ИП и компаниями. Для бизнеса — юридическое сопровождение на аутсорсинге.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Выигранных дел', value: '200+' },
                { label: 'Лет опыта', value: '10+' },
                { label: 'Взыскано для клиентов', value: '50 млн ₽' },
                { label: 'Регионов присутствия', value: 'Вся Россия' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between p-5" style={{ border: '1px solid rgba(200,163,95,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                  <span className="font-golos text-[14px]" style={{ color: PROSE }}>{stat.label}</span>
                  <span className="font-cormorant font-semibold text-[28px]" style={{ color: G }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Принципы */}
      <section style={{ background: NAVY, borderBottom: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
              <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>принципы</span>
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(200,163,95,0.3)' }} />
            </div>
            <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(26px, 3vw, 42px)' }}>
              Как мы подходим к делам
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="p-6" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(200,163,95,0.08)' }}>
                <div className="w-10 h-10 flex items-center justify-center mb-4" style={{ color: G, border: '1px solid rgba(200,163,95,0.2)' }}>
                  <Icon name={p.icon} size={17} />
                </div>
                <div className="font-golos font-semibold text-white text-[14px] mb-2">{p.title}</div>
                <div className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Программа лояльности */}
      <section style={{ background: DEEP, borderBottom: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ backgroundColor: G }} />
                <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>программа лояльности</span>
              </div>
              <h2 className="font-cormorant font-semibold text-white mb-5" style={{ fontSize: 'clamp(24px, 2.8vw, 38px)' }}>
                Выгоды для постоянных клиентов
              </h2>
              <div className="space-y-4">
                {[
                  'Скидка 10% на повторные обращения',
                  'Приоритетное рассмотрение заявки',
                  'Бесплатная экспресс-консультация по текущим делам',
                  'Специальные условия для бизнеса при абонентском обслуживании',
                ].map((it) => (
                  <div key={it} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5" style={{ border: `1px solid ${G}`, color: G }}>
                      <Icon name="Check" size={11} />
                    </div>
                    <span className="font-golos text-[14px] leading-relaxed" style={{ color: PROSE }}>{it}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ backgroundColor: G }} />
                <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>гарантии</span>
              </div>
              <h2 className="font-cormorant font-semibold text-white mb-5" style={{ fontSize: 'clamp(24px, 2.8vw, 38px)' }}>
                Гарантии и конфиденциальность
              </h2>
              <div className="space-y-4">
                {[
                  'Договор с фиксированными условиями на каждый вид работ',
                  'Полная юридическая тайна по всем делам',
                  'Не передаём данные третьим лицам ни при каких условиях',
                  'Честная оценка перспектив до начала — не берём безнадёжные дела',
                ].map((it) => (
                  <div key={it} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(200,163,95,0.1)', color: G }}>
                      <Icon name="Shield" size={11} />
                    </div>
                    <span className="font-golos text-[14px] leading-relaxed" style={{ color: PROSE }}>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: NAVY }}>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-cormorant font-semibold text-white mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
            Готовы обсудить вашу ситуацию?
          </h2>
          <p className="font-golos text-[14px] mb-8 leading-relaxed" style={{ color: MUTED }}>
            Бесплатная первичная консультация. Анализируем перспективы заранее.
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
