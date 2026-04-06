import { useState } from 'react';
import Layout from '@/components/Layout';
import BtnPrimary from '@/components/ui/BtnPrimary';
import Icon from '@/components/ui/icon';

const NAVY = '#0B1F3A';
const DEEP = '#081629';
const G = '#C8A35F';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', situation: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
            <span className="font-golos text-[11px] tracking-[0.3em] uppercase" style={{ color: G }}>связаться</span>
          </div>
          <h1 className="font-cormorant font-semibold text-white mb-6" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}>
            Контакты
          </h1>
          <p className="font-golos text-[16px] leading-relaxed max-w-2xl" style={{ color: PROSE }}>
            Опишите ситуацию — свяжемся в течение рабочего дня и предложим решение.
          </p>
        </div>
      </section>

      <section style={{ background: DEEP }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Форма */}
            <div>
              <h2 className="font-cormorant font-semibold text-white mb-8" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
                Оставить заявку
              </h2>

              {sent ? (
                <div className="p-8 text-center" style={{ background: 'rgba(200,163,95,0.07)', border: '1px solid rgba(200,163,95,0.3)' }}>
                  <div className="w-12 h-12 mx-auto flex items-center justify-center mb-4" style={{ border: `1px solid ${G}`, color: G }}>
                    <Icon name="Check" size={22} />
                  </div>
                  <div className="font-cormorant font-semibold text-white text-[24px] mb-2">Заявка принята</div>
                  <p className="font-golos text-[14px]" style={{ color: PROSE }}>
                    Свяжемся с вами в течение рабочего дня
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-golos text-[12px] tracking-[0.15em] uppercase mb-2" style={{ color: MUTED }}>
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Как к вам обращаться"
                      className="w-full font-golos text-[14px] px-4 py-3.5 outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(200,163,95,0.18)',
                        color: '#fff',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.18)')}
                    />
                  </div>

                  <div>
                    <label className="block font-golos text-[12px] tracking-[0.15em] uppercase mb-2" style={{ color: MUTED }}>
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
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.18)')}
                    />
                  </div>

                  <div>
                    <label className="block font-golos text-[12px] tracking-[0.15em] uppercase mb-2" style={{ color: MUTED }}>
                      Опишите ситуацию
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.situation}
                      onChange={e => setForm({ ...form, situation: e.target.value })}
                      placeholder="Кратко опишите вашу проблему или вопрос..."
                      className="w-full font-golos text-[14px] px-4 py-3.5 outline-none resize-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(200,163,95,0.18)',
                        color: '#fff',
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.18)')}
                    />
                  </div>

                  <p className="font-golos text-[11px]" style={{ color: 'rgba(201,212,227,0.35)' }}>
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>

                  <button
                    type="submit"
                    className="w-full font-golos font-semibold text-[13px] py-4 transition-opacity hover:opacity-85"
                    style={{ background: G, color: DEEP }}
                  >
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>

            {/* Контакты */}
            <div className="space-y-8">
              <h2 className="font-cormorant font-semibold text-white" style={{ fontSize: 'clamp(24px, 2.8vw, 36px)' }}>
                Как с нами связаться
              </h2>

              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (863) 400-00-00', href: 'tel:+78634000000' },
                { icon: 'Mail', label: 'Email', value: 'info@pravo-privilegia.ru', href: 'mailto:info@pravo-privilegia.ru' },
                { icon: 'MapPin', label: 'Адрес', value: 'г. Таганрог, Ростовская область', href: undefined },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-5">
                  <div className="w-11 h-11 flex items-center justify-center shrink-0" style={{ border: `1px solid rgba(200,163,95,0.25)`, color: G }}>
                    <Icon name={c.icon} size={18} />
                  </div>
                  <div>
                    <div className="font-golos text-[11px] tracking-[0.2em] uppercase mb-1" style={{ color: MUTED }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="font-golos text-[16px] font-medium text-white hover:opacity-75 transition-opacity">
                        {c.value}
                      </a>
                    ) : (
                      <div className="font-golos text-[15px] text-white">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4" style={{ borderTop: '1px solid rgba(200,163,95,0.1)' }}>
                <div className="font-golos text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: MUTED }}>Режим работы</div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-golos text-[13px]" style={{ color: PROSE }}>Понедельник — Пятница</span>
                    <span className="font-golos text-[13px] font-medium text-white">9:00 — 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-golos text-[13px]" style={{ color: PROSE }}>Суббота</span>
                    <span className="font-golos text-[13px] font-medium text-white">10:00 — 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-golos text-[13px]" style={{ color: PROSE }}>Воскресенье</span>
                    <span className="font-golos text-[13px]" style={{ color: MUTED }}>Выходной</span>
                  </div>
                </div>
              </div>

              <div className="p-5" style={{ background: 'rgba(200,163,95,0.06)', border: '1px solid rgba(200,163,95,0.15)' }}>
                <div className="font-golos text-[13px] leading-relaxed" style={{ color: PROSE }}>
                  Работаем <span className="text-white font-medium">онлайн по всей России</span>. Документы — по email, консультации — в Telegram, WhatsApp или по видеосвязи.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
