import { useState } from 'react';
import Layout from '@/components/Layout';
import Icon from '@/components/ui/icon';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', situation: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
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
              свяжитесь с нами
            </span>
          </div>
          <h1
            className="font-cormorant font-semibold text-white leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(42px, 6vw, 80px)' }}
          >
            Контакты
          </h1>
          <p className="font-golos text-[14px] sm:text-[16px] leading-relaxed max-w-xl" style={{ color: PROSE }}>
            Первичная консультация бесплатна. Оставьте заявку — свяжемся в течение 30 минут в рабочее время.
          </p>
        </div>
      </section>

      {/* Основной блок */}
      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* ЛЕВАЯ КОЛОНКА — реквизиты */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Заголовок колонки */}
              <div className="mb-2">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-6 h-px" style={{ backgroundColor: G }} />
                  <span className="font-golos text-[11px] tracking-[0.25em] uppercase" style={{ color: G }}>
                    Реквизиты
                  </span>
                </div>
              </div>

              {/* Телефон */}
              <div
                className="p-5"
                style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.12)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{ border: '1px solid rgba(200,163,95,0.25)', color: G }}
                  >
                    <Icon name="Phone" size={15} />
                  </div>
                  <span className="font-golos text-[11px] tracking-[0.2em] uppercase" style={{ color: MUTED }}>
                    Телефон
                  </span>
                </div>
                <a
                  href="tel:+78009999999"
                  className="font-cormorant font-semibold text-white block transition-opacity hover:opacity-75"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}
                >
                  +7 (800) 999-99-99
                </a>
              </div>

              {/* Email */}
              <div
                className="p-5"
                style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.12)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{ border: '1px solid rgba(200,163,95,0.25)', color: G }}
                  >
                    <Icon name="Mail" size={15} />
                  </div>
                  <span className="font-golos text-[11px] tracking-[0.2em] uppercase" style={{ color: MUTED }}>
                    Email
                  </span>
                </div>
                <a
                  href="mailto:info@pravo-privilegia.ru"
                  className="font-golos font-medium text-white text-[15px] block transition-opacity hover:opacity-75"
                >
                  info@pravo-privilegia.ru
                </a>
              </div>

              {/* Адрес */}
              <div
                className="p-5"
                style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.12)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{ border: '1px solid rgba(200,163,95,0.25)', color: G }}
                  >
                    <Icon name="MapPin" size={15} />
                  </div>
                  <span className="font-golos text-[11px] tracking-[0.2em] uppercase" style={{ color: MUTED }}>
                    Адрес
                  </span>
                </div>
                <p className="font-golos text-[15px] text-white leading-relaxed">
                  г. Таганрог, ул. Петровская, 1
                </p>
                <p className="font-golos text-[13px] mt-0.5" style={{ color: MUTED }}>
                  Ростовская область
                </p>
              </div>

              {/* Режим работы */}
              <div
                className="p-5"
                style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.12)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{ border: '1px solid rgba(200,163,95,0.25)', color: G }}
                  >
                    <Icon name="Clock" size={15} />
                  </div>
                  <span className="font-golos text-[11px] tracking-[0.2em] uppercase" style={{ color: MUTED }}>
                    Режим работы
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    { day: 'Пн–Пт', time: '9:00–19:00', active: true },
                    { day: 'Сб', time: '10:00–15:00', active: true },
                    { day: 'Вс', time: 'Выходной', active: false },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between items-center">
                      <span className="font-golos text-[13px]" style={{ color: PROSE }}>{row.day}</span>
                      <span
                        className="font-golos text-[13px] font-medium"
                        style={{ color: row.active ? '#fff' : MUTED }}
                      >
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Онлайн */}
              <div
                className="p-5"
                style={{ background: 'rgba(200,163,95,0.06)', border: '1px solid rgba(200,163,95,0.2)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{ border: '1px solid rgba(200,163,95,0.3)', color: G }}
                  >
                    <Icon name="Globe" size={15} />
                  </div>
                  <span className="font-golos text-[11px] tracking-[0.2em] uppercase" style={{ color: G }}>
                    Онлайн по всей России
                  </span>
                </div>
                <p className="font-golos text-[13px] leading-relaxed mb-4" style={{ color: PROSE }}>
                  Работаем дистанционно: видеозвонки, мессенджеры, электронный документооборот. Личное присутствие необязательно.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/78009999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-golos text-[12px] font-medium px-4 py-2 transition-all duration-200 hover:opacity-80"
                    style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', color: '#25d366' }}
                  >
                    <Icon name="MessageCircle" size={13} />
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/pravo_privilegia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-golos text-[12px] font-medium px-4 py-2 transition-all duration-200 hover:opacity-80"
                    style={{ background: 'rgba(41,182,246,0.1)', border: '1px solid rgba(41,182,246,0.3)', color: '#29b6f6' }}
                  >
                    <Icon name="Send" size={13} />
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА — форма */}
            <div className="lg:col-span-3">
              <div
                className="p-6 sm:p-8 h-full"
                style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.15)' }}
              >
                {/* Заголовок формы */}
                <div className="mb-7">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-px" style={{ backgroundColor: G }} />
                    <span className="font-golos text-[11px] tracking-[0.25em] uppercase" style={{ color: G }}>
                      Оставить заявку
                    </span>
                  </div>
                  <h2
                    className="font-cormorant font-semibold text-white"
                    style={{ fontSize: 'clamp(22px, 2.8vw, 32px)' }}
                  >
                    Первичная консультация бесплатно
                  </h2>
                </div>

                {sent ? (
                  <div className="py-14 text-center">
                    <div
                      className="w-14 h-14 mx-auto flex items-center justify-center mb-5"
                      style={{ border: `1px solid ${G}`, color: G }}
                    >
                      <Icon name="Check" size={24} />
                    </div>
                    <div className="font-cormorant font-semibold text-white text-[26px] mb-2">
                      Заявка принята
                    </div>
                    <p className="font-golos text-[14px]" style={{ color: PROSE }}>
                      Свяжемся с вами в течение 30 минут в рабочее время
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Имя */}
                    <div>
                      <label
                        className="block font-golos text-[11px] tracking-[0.15em] uppercase mb-2"
                        style={{ color: MUTED }}
                      >
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="w-full font-golos text-[14px] px-4 py-3.5 outline-none transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(200,163,95,0.18)',
                          color: '#fff',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.55)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.18)')}
                      />
                    </div>

                    {/* Телефон + Email в строку */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block font-golos text-[11px] tracking-[0.15em] uppercase mb-2"
                          style={{ color: MUTED }}
                        >
                          Телефон
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+7 (___) ___-__-__"
                          className="w-full font-golos text-[14px] px-4 py-3.5 outline-none transition-all duration-200"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(200,163,95,0.18)',
                            color: '#fff',
                          }}
                          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.55)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.18)')}
                        />
                      </div>
                      <div>
                        <label
                          className="block font-golos text-[11px] tracking-[0.15em] uppercase mb-2"
                          style={{ color: MUTED }}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full font-golos text-[14px] px-4 py-3.5 outline-none transition-all duration-200"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(200,163,95,0.18)',
                            color: '#fff',
                          }}
                          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.55)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.18)')}
                        />
                      </div>
                    </div>

                    {/* Ситуация */}
                    <div>
                      <label
                        className="block font-golos text-[11px] tracking-[0.15em] uppercase mb-2"
                        style={{ color: MUTED }}
                      >
                        Опишите ситуацию
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.situation}
                        onChange={e => setForm({ ...form, situation: e.target.value })}
                        placeholder="Расскажите о вашей ситуации — это поможет нам подготовиться к консультации..."
                        className="w-full font-golos text-[14px] px-4 py-3.5 outline-none resize-none transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(200,163,95,0.18)',
                          color: '#fff',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.55)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.18)')}
                      />
                    </div>

                    {/* Согласие */}
                    <p className="font-golos text-[11px] leading-relaxed" style={{ color: 'rgba(201,212,227,0.35)' }}>
                      Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности и даёте согласие на обработку персональных данных
                    </p>

                    {/* Кнопка */}
                    <button
                      type="submit"
                      className="w-full font-golos font-semibold text-[14px] py-4 transition-opacity hover:opacity-85"
                      style={{ background: G, color: DEEP }}
                    >
                      Отправить заявку
                    </button>

                    {/* Доп. контакты под формой */}
                    <div
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4"
                      style={{ borderTop: '1px solid rgba(200,163,95,0.1)' }}
                    >
                      <span className="font-golos text-[12px]" style={{ color: MUTED }}>
                        Или напишите напрямую:
                      </span>
                      <div className="flex gap-3">
                        <a
                          href="https://wa.me/78009999999"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 font-golos text-[12px] transition-opacity hover:opacity-75"
                          style={{ color: '#25d366' }}
                        >
                          <Icon name="MessageCircle" size={13} />
                          WhatsApp
                        </a>
                        <a
                          href="https://t.me/pravo_privilegia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 font-golos text-[12px] transition-opacity hover:opacity-75"
                          style={{ color: '#29b6f6' }}
                        >
                          <Icon name="Send" size={13} />
                          Telegram
                        </a>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
