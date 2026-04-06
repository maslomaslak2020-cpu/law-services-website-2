import Layout from '@/components/Layout';
import BtnPrimary from '@/components/ui/BtnPrimary';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

const CASES = [
  {
    tag: 'Страховые споры',
    title: 'Занижение выплаты по ОСАГО на 340 000 ₽',
    problem: 'Страховая компания оценила ущерб от ДТП в 148 000 ₽. Независимая экспертиза установила реальный ущерб 488 000 ₽.',
    actions: 'Подготовили претензию, провели независимую экспертизу. Страховая отказала. Подали иск с требованием взыскать разницу + штраф 50% + неустойку за просрочку.',
    result: 'Суд взыскал страховое возмещение, штраф и неустойку. Клиент получил 487 000 ₽.',
    amount: '487 000 ₽',
    duration: '4 месяца',
  },
  {
    tag: 'Защита бизнеса',
    title: 'Оспаривание договора поставки',
    problem: 'Контрагент поставил товар ненадлежащего качества на сумму 1 200 000 ₽ и отказывался расторгать договор.',
    actions: 'Провели экспертизу качества товара. Направили претензию с требованием расторжения. В суде доказали существенное нарушение условий договора.',
    result: 'Договор расторгнут, оплаченные деньги возвращены в полном объёме.',
    amount: '1 200 000 ₽',
    duration: '6 месяцев',
  },
  {
    tag: 'Взыскание задолженности',
    title: 'Взыскание долга с контрагента',
    problem: 'Контрагент не оплатил выполненные работы на сумму 780 000 ₽, игнорировал претензии, выводил имущество.',
    actions: 'Немедленно подали иск и ходатайство об обеспечительных мерах. Суд арестовал счета должника. Провели принудительное исполнение через приставов.',
    result: 'Долг погашен полностью, включая судебные расходы и проценты за пользование чужими деньгами.',
    amount: '780 000 ₽',
    duration: '5 месяцев',
  },
  {
    tag: 'Защита потребителей',
    title: 'Взыскание с застройщика за просрочку',
    problem: 'Застройщик нарушил срок передачи квартиры на 14 месяцев. Компенсацию отказывался платить добровольно.',
    actions: 'Рассчитали неустойку по ДДУ, направили претензию. Застройщик предложил 30% от суммы. Подали иск и взыскали полную сумму через суд.',
    result: 'Суд взыскал неустойку + компенсацию морального вреда + штраф 50% по ЗоЗПП.',
    amount: '320 000 ₽',
    duration: '3 месяца',
  },
  {
    tag: 'Семейные споры',
    title: 'Раздел имущества при разводе',
    problem: 'Супруг переоформил общее имущество на третьих лиц перед разводом. Клиенту грозила потеря доли в бизнесе.',
    actions: 'Оспорили сделки по переоформлению имущества. Доказали мнимость сделок. Добились признания имущества совместно нажитым.',
    result: 'Суд признал сделки недействительными, имущество включено в раздел. Клиент получил справедливую долю.',
    amount: 'Бизнес-доля',
    duration: '11 месяцев',
  },
  {
    tag: 'Административные споры',
    title: 'Отмена незаконного штрафа ГИБДД',
    problem: 'Клиент получил штраф за нарушение, которого не совершал — камера зафиксировала другой автомобиль с похожим номером.',
    actions: 'Собрали доказательства: фото номера, документы на автомобиль, записи о местонахождении. Подали жалобу в районный суд.',
    result: 'Штраф отменён, производство прекращено, расходы на юриста взысканы с ГИБДД.',
    amount: 'Штраф отменён',
    duration: '1,5 месяца',
  },
];

export default function Cases() {
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
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>результаты работы</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white mb-6" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
            Кейсы
          </h1>
          <p className="font-golos text-[16px] leading-relaxed max-w-2xl" style={{ color: PROSE }}>
            Реальные дела и результаты. Каждый кейс — это конкретная проблема, стратегия и итог.
          </p>
        </div>
      </section>

      {/* Кейсы */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 space-y-6">
          {CASES.map((c) => (
            <div
              key={c.title}
              className="p-8"
              style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.1)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left */}
                <div className="lg:col-span-4">
                  <div className="font-golos text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: G }}>{c.tag}</div>
                  <h2 className="font-cormorant font-semibold text-white text-[22px] leading-snug mb-4">{c.title}</h2>
                  <div className="flex gap-6">
                    <div>
                      <div className="font-cormorant font-semibold text-[28px]" style={{ color: G }}>{c.amount}</div>
                      <div className="font-golos text-[11px]" style={{ color: MUTED }}>результат</div>
                    </div>
                    <div>
                      <div className="font-golos font-semibold text-white text-[16px]">{c.duration}</div>
                      <div className="font-golos text-[11px]" style={{ color: MUTED }}>срок</div>
                    </div>
                  </div>
                </div>

                {/* Middle */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <div className="font-golos text-[11px] tracking-[0.15em] uppercase mb-1" style={{ color: MUTED }}>Ситуация</div>
                    <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{c.problem}</p>
                  </div>
                  <div>
                    <div className="font-golos text-[11px] tracking-[0.15em] uppercase mb-1" style={{ color: MUTED }}>Что сделали</div>
                    <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{c.actions}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="lg:col-span-3 flex flex-col justify-between">
                  <div className="p-4" style={{ background: 'rgba(200,163,95,0.06)', border: '1px solid rgba(200,163,95,0.15)' }}>
                    <div className="font-golos text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: G }}>Итог</div>
                    <p className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>{c.result}</p>
                  </div>
                  <BtnPrimary to="/contacts" className="mt-4 w-full text-center">Разобрать мою ситуацию</BtnPrimary>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
