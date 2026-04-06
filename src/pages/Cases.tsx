import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';
import SituationModal from '@/components/SituationModal';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

/*
  Чтобы добавить файл к кейсу:
  1. Положите PDF или изображение в папку /public/cases/
  2. Укажите имя файла в поле `file` ниже, например: 'case-01.pdf'
  3. Или укажите внешнюю ссылку в поле `link`, например: 'https://...'
  Файл появится как кнопка "Смотреть решение суда" под кейсом.
*/
const CASES = [
  {
    id: 'case-01',
    tag: 'Страховые споры',
    tagIcon: 'Car',
    title: 'Взыскание 840 000 ₽ по ОСАГО',
    amount: '+840 000 ₽',
    amountPositive: true,
    problem: 'Страховая компания отказала в выплате, ссылаясь на нарушение условий договора. Клиент получил официальный отказ.',
    actions: 'Провели независимую экспертизу, составили досудебную претензию, подали иск в районный суд с требованием взыскать полную сумму ущерба, штраф 50% и неустойку.',
    result: 'Суд полностью удовлетворил исковые требования. Взыскано: 420 000 ₽ ущерб + 210 000 ₽ штраф + 130 000 ₽ неустойка + 80 000 ₽ расходы.',
    file: '', // пример: 'case-osago-840.pdf'
    link: '', // пример: 'https://sudact.ru/...'
  },
  {
    id: 'case-02',
    tag: 'Банкротство',
    tagIcon: 'AlertCircle',
    title: 'Списание долгов на 3,2 млн ₽',
    amount: '−3 200 000 ₽',
    amountPositive: false,
    problem: 'Клиент — физическое лицо с долгами перед тремя банками и МФО. Общий долг — 3,2 млн ₽. Поступали угрозы коллекторов.',
    actions: 'Подготовили заявление о банкротстве, собрали необходимый пакет документов, прошли процедуру реализации имущества через арбитражный суд.',
    result: 'Процедура завершена за 8 месяцев. Все долги перед банками и МФО на 3 200 000 ₽ полностью списаны по решению суда.',
    file: '',
    link: '',
  },
  {
    id: 'case-03',
    tag: 'Взыскание',
    tagIcon: 'TrendingUp',
    title: 'Возврат 1,1 млн ₽ от контрагента',
    amount: '+1 100 000 ₽',
    amountPositive: true,
    problem: 'ИП заключил договор поставки, оплатил товар, но поставщик не выполнил обязательства и отказывался возвращать деньги.',
    actions: 'Направили претензию, получили отказ. Подали иск в арбитражный суд с требованием взыскать сумму долга, проценты по ст. 395 ГК РФ и судебные расходы.',
    result: 'Арбитражный суд взыскал 1 100 000 ₽, включая основной долг 950 000 ₽ и проценты за пользование чужими денежными средствами.',
    file: '',
    link: '',
  },
  {
    id: 'case-04',
    tag: 'Защита потребителей',
    tagIcon: 'ShieldCheck',
    title: 'Возврат 580 000 ₽ от застройщика',
    amount: '+580 000 ₽',
    amountPositive: true,
    problem: 'Застройщик задержал сдачу квартиры на 14 месяцев. Клиент нёс расходы на аренду жилья и требовал компенсации.',
    actions: 'Подали досудебную претензию с расчётом неустойки по ДДУ, составили иск с требованием взыскать неустойку и компенсацию морального вреда.',
    result: 'Взыскана неустойка 420 000 ₽, компенсация морального вреда 50 000 ₽, штраф потребителя 110 000 ₽. Итого: 580 000 ₽.',
    file: '',
    link: '',
  },
  {
    id: 'case-05',
    tag: 'Судебные споры',
    tagIcon: 'Gavel',
    title: 'Отмена долга 2,8 млн ₽ по расписке',
    amount: '−2 800 000 ₽',
    amountPositive: false,
    problem: 'Клиент подписал расписку под давлением. Взыскатель подал иск в суд с требованием вернуть 2,8 млн ₽.',
    actions: 'Собрали доказательства безденежности расписки, привлекли свидетелей, заявили о недействительности договора займа.',
    result: 'Суд отказал во взыскании. Расписка признана безденежной. Клиент освобождён от обязательства на 2 800 000 ₽.',
    file: '',
    link: '',
  },
  {
    id: 'case-06',
    tag: 'КАСКО',
    tagIcon: 'Car',
    title: 'Взыскание полной суммы по КАСКО',
    amount: '+1 350 000 ₽',
    amountPositive: true,
    problem: 'Страховая компания выплатила 320 000 ₽ вместо 1 350 000 ₽ рыночной стоимости автомобиля, признанного тотально погибшим.',
    actions: 'Провели независимую оценку, доказали занижение выплаты. Подали иск о взыскании недоплаченной суммы с учётом штрафа и неустойки.',
    result: 'Взысканы: 1 030 000 ₽ доплата + 165 000 ₽ штраф + 155 000 ₽ неустойка. Суд удовлетворил требования в полном объёме.',
    file: '',
    link: '',
  },
];

function CaseCard({ c, onSituationClick }: { c: typeof CASES[0]; onSituationClick: () => void }) {
  const [open, setOpen] = useState(false);
  const hasDoc = !!(c.file || c.link);

  const docUrl = c.link || (c.file ? `/cases/${c.file}` : '');
  const docLabel = c.file?.endsWith('.pdf')
    ? 'Смотреть решение суда (PDF)'
    : c.file
      ? 'Открыть документ'
      : 'Смотреть на сайте суда';

  return (
    <div
      className="flex flex-col"
      style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.12)' }}
    >
      {/* Шапка карточки */}
      <div className="p-5 sm:p-7 flex-1">
        {/* Тег + сумма */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 flex items-center justify-center shrink-0"
              style={{ border: '1px solid rgba(200,163,95,0.25)', color: G }}
            >
              <Icon name={c.tagIcon} size={13} />
            </div>
            <span
              className="font-golos text-[11px] tracking-[0.2em] uppercase"
              style={{ color: G }}
            >
              {c.tag}
            </span>
          </div>
          <div
            className="font-cormorant font-semibold text-[22px] sm:text-[26px] shrink-0 leading-none"
            style={{ color: c.amountPositive ? '#6fcf97' : G }}
          >
            {c.amount}
          </div>
        </div>

        {/* Заголовок */}
        <h2
          className="font-cormorant font-semibold text-white leading-snug mb-5"
          style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
        >
          {c.title}
        </h2>

        {/* Блоки Проблема / Действия / Результат */}
        <div className="space-y-4">
          {[
            { label: 'Проблема', text: c.problem, icon: 'AlertCircle' },
            { label: 'Действия', text: c.actions, icon: 'Zap' },
            { label: 'Результат', text: c.result, icon: 'CheckCircle' },
          ].map((block) => (
            <div key={block.label}>
              <div className="flex items-center gap-2 mb-1.5">
                <Icon name={block.icon} size={12} style={{ color: G }} />
                <span
                  className="font-golos text-[10px] tracking-[0.2em] uppercase font-semibold"
                  style={{ color: G }}
                >
                  {block.label}
                </span>
              </div>
              <p
                className="font-golos text-[13px] leading-relaxed"
                style={{ color: PROSE }}
              >
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Нижняя панель */}
      <div
        className="px-5 sm:px-7 py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        style={{ borderTop: '1px solid rgba(200,163,95,0.1)' }}
      >
        {/* Документ / ссылка */}
        {hasDoc ? (
          <a
            href={docUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 font-golos text-[12px] font-medium py-2.5 px-4 transition-all duration-200 hover:opacity-80"
            style={{
              border: '1px solid rgba(200,163,95,0.3)',
              color: G,
              background: 'rgba(200,163,95,0.05)',
            }}
          >
            <Icon name={c.file ? 'FileText' : 'ExternalLink'} size={13} />
            {docLabel}
          </a>
        ) : (
          <div
            className="flex-1 flex items-center justify-center gap-2 font-golos text-[11px] py-2.5 px-4"
            style={{
              border: '1px dashed rgba(200,163,95,0.15)',
              color: 'rgba(201,212,227,0.25)',
            }}
          >
            <Icon name="Lock" size={12} />
            Документ доступен по запросу
          </div>
        )}

        {/* CTA */}
        <button
          onClick={onSituationClick}
          className="flex-1 font-golos font-semibold text-[12px] py-2.5 px-4 transition-opacity hover:opacity-85 whitespace-nowrap"
          style={{ background: G, color: DEEP }}
        >
          Разобрать мою ситуацию
        </button>
      </div>
    </div>
  );
}

export default function Cases() {
  const [showModal, setShowModal] = useState(false);

  const totalPositive = CASES
    .filter(c => c.amountPositive)
    .reduce((sum, c) => {
      const n = parseInt(c.amount.replace(/[^\d]/g, ''));
      return sum + n;
    }, 0);

  return (
    <Layout>
      {showModal && <SituationModal onClose={() => setShowModal(false)} />}

      {/* Hero */}
      <section
        className="relative pt-28 sm:pt-32 pb-14 sm:pb-20"
        style={{
          background: `linear-gradient(160deg, ${DEEP} 0%, ${NAVY} 100%)`,
          borderBottom: '1px solid rgba(200,163,95,0.12)',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ backgroundColor: G }} />
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>
              реальные результаты
            </span>
          </div>
          <h1
            className="font-cormorant font-semibold text-white leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(42px, 6vw, 80px)' }}
          >
            Кейсы
          </h1>
          <p className="font-golos text-[14px] sm:text-[16px] leading-relaxed max-w-2xl mb-10" style={{ color: PROSE }}>
            Реальные дела и результаты нашей работы. Никаких выдуманных историй — только факты.
          </p>

          {/* Статистика */}
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {[
              { label: 'Дел выиграно', value: `${CASES.length}+` },
              { label: 'Взыскано для клиентов', value: `${(totalPositive / 1000000).toFixed(1)} млн ₽` },
              { label: 'Долгов списано', value: '6+ млн ₽' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span
                  className="font-cormorant font-semibold"
                  style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: G }}
                >
                  {s.value}
                </span>
                <span className="font-golos text-[12px]" style={{ color: MUTED }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Кейсы */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {CASES.map((c) => (
              <CaseCard key={c.id} c={c} onSituationClick={() => setShowModal(true)} />
            ))}
          </div>

          {/* Подсказка про файлы */}
          <div
            className="mt-8 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            style={{ background: 'rgba(200,163,95,0.04)', border: '1px solid rgba(200,163,95,0.12)' }}
          >
            <div className="w-8 h-8 flex items-center justify-center shrink-0" style={{ border: '1px solid rgba(200,163,95,0.25)', color: G }}>
              <Icon name="FolderOpen" size={15} />
            </div>
            <p className="font-golos text-[12px] leading-relaxed" style={{ color: MUTED }}>
              Документы по делам хранятся в папке <span style={{ color: 'rgba(200,163,95,0.7)', fontFamily: 'monospace' }}>public/cases/</span> — положите туда PDF или фото, укажите имя файла в настройках, и кнопка «Смотреть решение суда» появится автоматически.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: NAVY, borderTop: '1px solid rgba(200,163,95,0.1)' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-6 py-16 sm:py-20 text-center">
          <h2
            className="font-cormorant font-semibold text-white mb-4"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >
            Похожая ситуация?
          </h2>
          <p className="font-golos text-[14px] mb-8" style={{ color: MUTED }}>
            Расскажите — оценим перспективы и предложим стратегию.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="font-golos font-semibold text-[14px] px-8 py-4 transition-opacity hover:opacity-85"
            style={{ background: G, color: DEEP }}
          >
            Разобрать мою ситуацию
          </button>
        </div>
      </section>
    </Layout>
  );
}
