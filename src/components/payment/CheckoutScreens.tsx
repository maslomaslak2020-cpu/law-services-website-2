import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { C } from './paymentColors';

// ─── SHARED INPUT ────────────────────────────────────────────
function InputField({
  label,
  value,
  onChange,
  placeholder,
  maxLen,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  maxLen?: number;
  type?: string;
}) {
  return (
    <div>
      <div className="font-golos text-[11px] font-medium tracking-wide uppercase mb-2" style={{ color: C.sub }}>
        {label}
      </div>
      <input
        type={type}
        inputMode={type === 'tel' ? 'numeric' : 'text'}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLen}
        className="w-full outline-none font-golos text-[16px] px-4 py-4 transition-all"
        style={{
          background: C.bg,
          border: `1.5px solid ${C.border}`,
          borderRadius: 12,
          color: C.text,
          caretColor: C.accent,
        }}
        onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = C.accent)}
        onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = C.border)}
      />
    </div>
  );
}

// ─── BACK BUTTON ─────────────────────────────────────────────
function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 mb-8 font-golos text-[13px] transition-opacity hover:opacity-60"
      style={{ color: C.sub }}
    >
      <Icon name="ChevronLeft" size={16} />
      Назад
    </button>
  );
}

// ─── SBP SCREEN ─────────────────────────────────────────────
export function SbpScreen({ amount, onBack }: { amount: string; onBack: () => void }) {
  const [copied, setCopied] = useState(false);
  const mockLink = 'https://qr.nspk.ru/AS1000XXXXXXXXXXX';

  const copyLink = () => {
    navigator.clipboard?.writeText(mockLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: '100dvh', background: C.bg }}>
      <div className="px-5 pt-12 pb-8" style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>
        <BackButton onClick={onBack} />

        <div className="font-golos font-semibold text-[20px] mb-1" style={{ color: C.text }}>
          Быстрая оплата
        </div>
        <div className="font-golos text-[13px] mb-7" style={{ color: C.sub }}>
          Наведите камеру или откройте в банке
        </div>

        {/* QR block */}
        <div
          className="flex flex-col items-center py-8 px-6 mb-5"
          style={{
            background: C.surface,
            border: `1.5px solid ${C.border}`,
            borderRadius: 20,
          }}
        >
          {/* QR mock */}
          <div
            className="relative mb-5"
            style={{ width: 200, height: 200, background: C.bg, borderRadius: 12, overflow: 'hidden' }}
          >
            <svg viewBox="0 0 200 200" width="200" height="200" className="absolute inset-0">
              {[0,1,2,3,4,5,6].map(r =>
                [0,1,2,3,4,5,6].map(c => {
                  const isCorner = (r < 2 && c < 2) || (r < 2 && c > 4) || (r > 4 && c < 2);
                  const val = ((r * 7 + c * 3 + r + c) % 2 === 0) || isCorner;
                  return val ? (
                    <rect
                      key={`${r}-${c}`}
                      x={10 + c * 26}
                      y={10 + r * 26}
                      width={22}
                      height={22}
                      rx={isCorner ? 4 : 2}
                      fill={C.sbp}
                    />
                  ) : null;
                })
              )}
              <rect x="83" y="83" width="34" height="34" rx="8" fill={C.sbp} />
              <text x="100" y="107" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="sans-serif">
                СБП
              </text>
            </svg>
          </div>

          {/* Amount */}
          <div
            className="font-golos font-bold mb-1"
            style={{ fontSize: 30, color: C.text }}
          >
            {Number(amount).toLocaleString('ru-RU')} ₽
          </div>
          <div className="font-golos text-[12px]" style={{ color: C.sub }}>
            Юридическая консультация
          </div>

          {/* SBP logo */}
          <div className="flex items-center gap-1.5 mt-4">
            <div
              className="w-5 h-5 flex items-center justify-center"
              style={{ background: C.sbp, borderRadius: 4 }}
            >
              <Icon name="Zap" size={11} style={{ color: '#fff' }} />
            </div>
            <span className="font-golos text-[11px] font-medium" style={{ color: C.sbp }}>
              Система быстрых платежей
            </span>
          </div>
        </div>

        {/* Open in app */}
        <button
          onClick={() => window.open(mockLink, '_blank')}
          className="w-full font-golos font-semibold text-[16px] py-4 mb-3 flex items-center justify-center gap-2 transition-all"
          style={{ background: C.sbp, color: '#fff', borderRadius: 14 }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
        >
          <Icon name="Smartphone" size={18} />
          Открыть в банке
        </button>

        <button
          onClick={copyLink}
          className="w-full font-golos font-medium text-[14px] py-3.5 flex items-center justify-center gap-2 transition-all"
          style={{
            background: copied ? C.successLight : C.surface,
            border: `1.5px solid ${copied ? C.success : C.border}`,
            color: copied ? C.success : C.sub,
            borderRadius: 14,
          }}
        >
          <Icon name={copied ? 'Check' : 'Copy'} size={15} />
          {copied ? 'Ссылка скопирована' : 'Скопировать ссылку'}
        </button>

        {/* Timer mock */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          <Icon name="Clock" size={13} style={{ color: C.warn }} />
          <span className="font-golos text-[12px]" style={{ color: C.warn }}>
            Ссылка активна 15 минут
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── CARD SCREEN ────────────────────────────────────────────
export function CardScreen({ amount, onBack }: { amount: string; onBack: () => void }) {
  const [card, setCard] = useState({ number: '', expiry: '', cvv: '', name: '' });
  const [paying, setPaying] = useState(false);

  const fmtCard = (v: string) =>
    v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  const fmtExpiry = (v: string) => {
    const d = v.replace(/\D/g, '').slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d;
  };

  const valid =
    card.number.replace(/\s/g, '').length === 16 &&
    card.expiry.replace(/\s\/\s/g, '').length === 4 &&
    card.cvv.length === 3 &&
    card.name.length > 1;

  const handlePay = () => {
    if (!valid) return;
    setPaying(true);
    setTimeout(() => setPaying(false), 2000);
  };

  return (
    <div style={{ minHeight: '100dvh', background: C.bg }}>
      <div className="px-5 pt-12 pb-8" style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>
        <BackButton onClick={onBack} />

        <div className="font-golos font-semibold text-[20px] mb-1" style={{ color: C.text }}>
          Банковская карта
        </div>
        <div
          className="inline-flex items-center gap-1.5 font-golos font-bold px-3 py-1 mb-7"
          style={{ background: C.accentLight, borderRadius: 8, color: C.accent, fontSize: 15 }}
        >
          {Number(amount).toLocaleString('ru-RU')} ₽
        </div>

        {/* Apple/Google Pay */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { icon: '🍎', label: 'Apple Pay' },
            { icon: 'G', label: 'Google Pay' },
          ].map(p => (
            <button
              key={p.label}
              className="flex items-center justify-center gap-2 py-3.5 font-golos font-semibold text-[14px] transition-all"
              style={{
                background: C.surface,
                border: `1.5px solid ${C.border}`,
                borderRadius: 12,
                color: C.text,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = C.accent)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = C.border)}
            >
              <span style={{ fontSize: 16 }}>{p.icon}</span>
              {p.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: C.border }} />
          <span className="font-golos text-[11px]" style={{ color: C.muted }}>
            или введите карту
          </span>
          <div className="flex-1 h-px" style={{ background: C.border }} />
        </div>

        {/* Card form */}
        <div className="flex flex-col gap-4 mb-6">
          <InputField
            label="Номер карты"
            value={card.number}
            onChange={v => setCard({ ...card, number: fmtCard(v) })}
            placeholder="0000 0000 0000 0000"
            maxLen={19}
            type="tel"
          />
          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="Срок"
              value={card.expiry}
              onChange={v => setCard({ ...card, expiry: fmtExpiry(v) })}
              placeholder="ММ / ГГ"
              maxLen={7}
              type="tel"
            />
            <InputField
              label="CVV"
              value={card.cvv}
              onChange={v => setCard({ ...card, cvv: v.replace(/\D/g, '').slice(0, 3) })}
              placeholder="•••"
              maxLen={3}
              type="tel"
            />
          </div>
          <InputField
            label="Имя на карте"
            value={card.name}
            onChange={v => setCard({ ...card, name: v.toUpperCase() })}
            placeholder="IVAN IVANOV"
          />
        </div>

        <button
          onClick={handlePay}
          disabled={!valid || paying}
          className="w-full font-golos font-semibold text-[16px] py-5 flex items-center justify-center gap-2 transition-all mb-4"
          style={{
            background: valid ? C.accent : C.border,
            color: valid ? '#fff' : C.muted,
            borderRadius: 16,
            cursor: valid ? 'pointer' : 'not-allowed',
          }}
        >
          {paying ? (
            <>
              <Icon name="Loader2" size={18} />
              Обработка...
            </>
          ) : (
            <>
              <Icon name="Lock" size={16} />
              Оплатить {Number(amount).toLocaleString('ru-RU')} ₽
            </>
          )}
        </button>

        {/* Security */}
        <div
          className="flex items-start gap-3 p-3"
          style={{ background: C.successLight, borderRadius: 10, border: `1px solid rgba(18,160,92,0.15)` }}
        >
          <Icon name="ShieldCheck" size={15} style={{ color: C.success, marginTop: 1 }} />
          <div className="font-golos text-[11px] leading-relaxed" style={{ color: C.success }}>
            Платёж защищён технологией 3-D Secure. Данные карты передаются по зашифрованному каналу T-Bank.
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── INVOICE SCREEN ─────────────────────────────────────────
export function InvoiceScreen({ amount, onBack }: { amount: string; onBack: () => void }) {
  const [form, setForm] = useState({ name: '', email: '' });
  const [sent, setSent] = useState(false);

  const valid = form.name.length > 1 && form.email.includes('@');

  if (sent) {
    return (
      <div
        className="flex flex-col items-center justify-center px-5"
        style={{ minHeight: '100dvh', background: C.bg }}
      >
        <div
          className="w-16 h-16 flex items-center justify-center mb-6"
          style={{ background: C.successLight, borderRadius: 20 }}
        >
          <Icon name="MailCheck" size={28} style={{ color: C.success }} />
        </div>
        <div className="font-golos font-semibold text-[22px] mb-2 text-center" style={{ color: C.text }}>
          Счёт отправлен
        </div>
        <div className="font-golos text-[14px] text-center mb-8" style={{ color: C.sub }}>
          Проверьте почту — счёт уже у вас
        </div>
        <div
          className="w-full max-w-sm p-4 mb-8"
          style={{ background: C.surface, border: `1.5px solid ${C.border}`, borderRadius: 14 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-golos text-[13px]" style={{ color: C.sub }}>Получатель</span>
            <span className="font-golos text-[13px] font-medium" style={{ color: C.text }}>{form.name}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-golos text-[13px]" style={{ color: C.sub }}>Email</span>
            <span className="font-golos text-[13px] font-medium" style={{ color: C.text }}>{form.email}</span>
          </div>
          <div className="flex justify-between items-center pt-2" style={{ borderTop: `1px solid ${C.border}` }}>
            <span className="font-golos text-[13px]" style={{ color: C.sub }}>Сумма</span>
            <span className="font-golos font-bold text-[16px]" style={{ color: C.accent }}>
              {Number(amount).toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>
        <button
          onClick={onBack}
          className="font-golos text-[14px] font-medium px-6 py-3 transition-opacity hover:opacity-70"
          style={{ color: C.accent }}
        >
          На главную
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100dvh', background: C.bg }}>
      <div className="px-5 pt-12 pb-8" style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>
        <BackButton onClick={onBack} />

        <div className="font-golos font-semibold text-[20px] mb-1" style={{ color: C.text }}>
          Получить счёт
        </div>
        <div
          className="inline-flex items-center gap-1.5 font-golos font-bold px-3 py-1 mb-7"
          style={{ background: C.accentLight, borderRadius: 8, color: C.accent, fontSize: 15 }}
        >
          {Number(amount).toLocaleString('ru-RU')} ₽
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div>
            <div className="font-golos text-[11px] font-medium tracking-wide uppercase mb-2" style={{ color: C.sub }}>
              Имя / Название компании
            </div>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="ООО Ромашка"
              className="w-full outline-none font-golos text-[16px] px-4 py-4 transition-all"
              style={{
                background: C.surface,
                border: `1.5px solid ${C.border}`,
                borderRadius: 12,
                color: C.text,
              }}
              onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = C.accent)}
              onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = C.border)}
            />
          </div>
          <div>
            <div className="font-golos text-[11px] font-medium tracking-wide uppercase mb-2" style={{ color: C.sub }}>
              Email
            </div>
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="buh@company.ru"
              className="w-full outline-none font-golos text-[16px] px-4 py-4 transition-all"
              style={{
                background: C.surface,
                border: `1.5px solid ${C.border}`,
                borderRadius: 12,
                color: C.text,
              }}
              onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = C.accent)}
              onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = C.border)}
            />
          </div>
        </div>

        {/* Invoice preview */}
        <div
          className="p-4 mb-6"
          style={{ background: C.surface, border: `1.5px solid ${C.border}`, borderRadius: 14 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Icon name="FileText" size={14} style={{ color: C.sub }} />
            <span className="font-golos text-[12px]" style={{ color: C.sub }}>Счёт включает</span>
          </div>
          {[
            'Наименование услуги',
            'Реквизиты организации',
            'Сумма с НДС / без НДС',
            'Срок оплаты: 5 рабочих дней',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 py-1.5">
              <Icon name="Check" size={12} style={{ color: C.success }} />
              <span className="font-golos text-[13px]" style={{ color: C.text }}>{item}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => valid && setSent(true)}
          disabled={!valid}
          className="w-full font-golos font-semibold text-[16px] py-5 flex items-center justify-center gap-2 transition-all"
          style={{
            background: valid ? C.success : C.border,
            color: valid ? '#fff' : C.muted,
            borderRadius: 16,
            cursor: valid ? 'pointer' : 'not-allowed',
          }}
        >
          <Icon name="Send" size={16} />
          Получить счёт
        </button>
      </div>
    </div>
  );
}
