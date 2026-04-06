import { useState } from 'react';
import Layout from '@/components/Layout';

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
  const [activeTag, setActiveTag] = useState('Все статьи');

  const filtered = activeTag === 'Все статьи'
    ? POSTS
    : POSTS.filter(p => p.tag === activeTag);

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative pt-28 sm:pt-32 pb-14 sm:pb-20"
        style={{ background: `linear-gradient(160deg, ${DEEP} 0%, ${NAVY} 100%)`, borderBottom: '1px solid rgba(200,163,95,0.12)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>полезные материалы</span>
          </div>
          <h1
            className="font-cormorant font-semibold text-white leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(42px, 6vw, 80px)' }}
          >
            Блог
          </h1>
          <p className="font-golos text-[14px] sm:text-[16px] leading-relaxed max-w-2xl" style={{ color: PROSE }}>
            Разборы дел, изменения законодательства, полезные инструкции. Без воды — только практически применимая информация.
          </p>
        </div>
      </section>

      {/* Фильтр по тегам */}
      <section style={{ background: DEEP, borderBottom: '1px solid rgba(200,163,95,0.08)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-5">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {TAGS.map((tag) => {
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className="font-golos text-[12px] sm:text-[13px] px-4 py-2 transition-all duration-200"
                  style={{
                    background: isActive ? G : 'transparent',
                    border: isActive ? `1px solid ${G}` : '1px solid rgba(200,163,95,0.2)',
                    color: isActive ? DEEP : MUTED,
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {tag}
                  {tag !== 'Все статьи' && (
                    <span
                      className="ml-1.5 font-golos text-[10px]"
                      style={{ opacity: isActive ? 0.7 : 0.5 }}
                    >
                      ({POSTS.filter(p => p.tag === tag).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Статьи */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-20">

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-golos text-[15px]" style={{ color: MUTED }}>
                Статей в этой категории пока нет
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filtered.map((post) => (
                <article
                  key={post.title}
                  className="flex flex-col group cursor-pointer"
                  style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.1)' }}
                >
                  {/* Цветная полоска тега сверху */}
                  <div style={{ height: '2px', background: G, opacity: 0.5 }} />

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-golos text-[10px] tracking-[0.2em] uppercase px-2.5 py-1"
                        style={{
                          background: 'rgba(200,163,95,0.1)',
                          border: '1px solid rgba(200,163,95,0.2)',
                          color: G,
                        }}
                      >
                        {post.tag}
                      </span>
                      <span className="font-golos text-[11px]" style={{ color: MUTED }}>{post.readTime}</span>
                    </div>

                    <h2
                      className="font-golos font-semibold text-white text-[15px] leading-snug mb-3 flex-1 transition-opacity group-hover:opacity-75"
                    >
                      {post.title}
                    </h2>

                    <p className="font-golos text-[13px] leading-relaxed mb-5" style={{ color: PROSE }}>
                      {post.excerpt}
                    </p>

                    <div
                      className="flex items-center justify-between pt-4"
                      style={{ borderTop: '1px solid rgba(200,163,95,0.08)' }}
                    >
                      <span className="font-golos text-[12px]" style={{ color: MUTED }}>{post.date}</span>
                      <span
                        className="font-golos text-[12px] font-medium flex items-center gap-1 transition-opacity group-hover:opacity-75"
                        style={{ color: G }}
                      >
                        Читать →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeTag === 'Все статьи' && (
            <div className="text-center mt-10 sm:mt-12">
              <button
                className="font-golos text-[13px] font-medium px-7 py-3.5 transition-all duration-200 hover:opacity-80"
                style={{ border: '1px solid rgba(200,163,95,0.35)', color: G }}
              >
                Загрузить ещё
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
