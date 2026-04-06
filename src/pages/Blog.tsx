import Layout from '@/components/Layout';
import BtnSecondary from '@/components/ui/BtnSecondary';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

const POSTS = [
  {
    tag: 'Страховые споры',
    date: '15 ноября 2024',
    title: 'Как взыскать полную выплату по ОСАГО, если страховая занизила сумму',
    excerpt: 'Страховая компания занизила выплату? Это стандартная практика. Рассказываем, как через суд взыскать реальную сумму ущерба, штраф 50% и неустойку за просрочку.',
    readTime: '7 мин',
  },
  {
    tag: 'Защита бизнеса',
    date: '3 ноября 2024',
    title: 'Договор с контрагентом: 5 условий, которые защитят ваш бизнес',
    excerpt: 'Разбираем ключевые условия в договорах поставки и оказания услуг, которые защитят вас при нарушении обязательств контрагентом.',
    readTime: '10 мин',
  },
  {
    tag: 'Законодательство',
    date: '20 октября 2024',
    title: 'Изменения в КАС РФ в 2024 году: что важно знать',
    excerpt: 'Обзор ключевых изменений в Кодексе административного судопроизводства. Новые сроки, порядок подачи жалоб и расширение оснований для пересмотра.',
    readTime: '8 мин',
  },
  {
    tag: 'Защита потребителей',
    date: '8 октября 2024',
    title: 'Застройщик нарушил срок передачи квартиры: пошаговая инструкция',
    excerpt: 'Что делать, если застройщик нарушил срок сдачи по ДДУ. Как рассчитать неустойку, написать претензию и подать иск.',
    readTime: '12 мин',
  },
  {
    tag: 'Семейные споры',
    date: '25 сентября 2024',
    title: 'Раздел бизнеса при разводе: как защитить долю в компании',
    excerpt: 'Доля в ООО — совместно нажитое имущество? Разбираем, когда можно разделить бизнес при разводе и как защититься от такого раздела.',
    readTime: '9 мин',
  },
  {
    tag: 'Взыскание долгов',
    date: '12 сентября 2024',
    title: 'Как взыскать долг с физического лица через суд в 2024 году',
    excerpt: 'Полная инструкция по взысканию долга с физического лица: от претензии до принудительного исполнения через судебных приставов.',
    readTime: '11 мин',
  },
];

const TAGS = ['Все статьи', 'Страховые споры', 'Защита бизнеса', 'Законодательство', 'Защита потребителей', 'Семейные споры', 'Взыскание долгов'];

export default function Blog() {
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
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>полезные материалы</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white mb-6" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
            Блог
          </h1>
          <p className="font-golos text-[16px] leading-relaxed max-w-2xl" style={{ color: PROSE }}>
            Разборы дел, изменения законодательства, полезные инструкции. Без воды — только практически применимая информация.
          </p>
        </div>
      </section>

      {/* Теги */}
      <section style={{ background: DEEP, borderBottom: '1px solid rgba(200,163,95,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-wrap gap-3">
            {TAGS.map((tag, i) => (
              <button
                key={tag}
                className="font-golos text-[12px] px-4 py-2 transition-all duration-200"
                style={{
                  background: i === 0 ? 'rgba(200,163,95,0.15)' : 'transparent',
                  border: i === 0 ? `1px solid rgba(200,163,95,0.4)` : '1px solid rgba(200,163,95,0.12)',
                  color: i === 0 ? G : MUTED,
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Статьи */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <article
                key={post.title}
                className="p-6 flex flex-col cursor-pointer group"
                style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.1)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="font-golos text-[10px] tracking-[0.2em] uppercase" style={{ color: G }}>{post.tag}</div>
                  <div className="font-golos text-[11px]" style={{ color: MUTED }}>{post.readTime}</div>
                </div>
                <h2 className="font-golos font-semibold text-white text-[15px] leading-snug mb-3 group-hover:opacity-80 transition-opacity flex-1">
                  {post.title}
                </h2>
                <p className="font-golos text-[13px] leading-relaxed mb-5" style={{ color: PROSE }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-golos text-[12px]" style={{ color: MUTED }}>{post.date}</span>
                  <span className="font-golos text-[12px]" style={{ color: G }}>Читать →</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <BtnSecondary to="/blog">Загрузить ещё</BtnSecondary>
          </div>
        </div>
      </section>
    </Layout>
  );
}
