import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { C, PayerInfo } from './paymentColors';

// ─── SHARED INPUT ────────────────────────────────────────────
function InputField({
  label,
  value,
  onChange,
  placeholder,
  maxLen,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  maxLen?: number;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <div className="font-golos text-[12px] mb-1.5 flex items-center gap-1" style={{ color: C.sub }}>
        {label}
        {required && <span style={{ color: C.warn }}>*</span>}
      </div>
      <input
        type={type}
        inputMode={type === 'tel' ? 'numeric' : 'text'}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLen}
        className="w-full outline-none font-golos text-[15px] px-4 py-3.5 transition-all"
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

// ─── PAYER SUMMARY ────────────────────────────────────────────
function PayerSummary({ payer }: { payer: PayerInfo }) {
  return (
    <div
      className="p-3 mb-5 flex flex-col gap-1.5"
      style={{ background: C.accentLight, borderRadius: 10 }}
    >
      <div className="flex items-center gap-2">
        <Icon name="User" size={12} style={{ color: C.accent }} />
        <span className="font-golos text-[12px] font-medium" style={{ color: C.text }}>{payer.fio}</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="Mail" size={12} style={{ color: C.accent }} />
        <span className="font-golos text-[12px]" style={{ color: C.sub }}>{payer.email}</span>
      </div>
      {payer.inn && (
        <div className="flex items-center gap-2">
          <Icon name="Hash" size={12} style={{ color: C.accent }} />
          <span className="font-golos text-[12px]" style={{ color: C.sub }}>ИНН: {payer.inn}</span>
        </div>
      )}
    </div>
  );
}

// ─── SBP SCREEN ─────────────────────────────────────────────
export function SbpScreen({
  amount,
  payer,
  onBack,
}: {
  amount: string;
  payer: PayerInfo;
  onBack: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const sbpLink = `https://qr.nspk.ru/AS10007XXXXXXXXXX?sum=${amount}00&cur=RUB&crc=XXXX`;

  const copyLink = () => {
    navigator.clipboard?.writeText(sbpLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ minHeight: '100dvh', background: C.bg }}>
      <div className="px-5 pt-12 pb-10" style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>
        <BackButton onClick={onBack} />

        <div className="font-golos font-semibold text-[20px] mb-1" style={{ color: C.text }}>
          Быстрая оплата (СБП)
        </div>
        <div className="font-golos text-[13px] mb-5" style={{ color: C.sub }}>
          Оплата через Систему быстрых платежей
        </div>

        <PayerSummary payer={payer} />

        {/* Amount card */}
        <div
          className="flex flex-col items-center py-8 px-6 mb-5"
          style={{ background: C.surface, border: `1.5px solid ${C.border}`, borderRadius: 20 }}
        >
          <div
            className="w-16 h-16 flex items-center justify-center mb-4"
            style={{ background: C.sbpLight, borderRadius: 18 }}
          >
            <Icon name="Zap" size={28} style={{ color: C.sbp }} />
          </div>
          <div className="font-golos font-bold mb-1" style={{ fontSize: 34, color: C.text }}>
            {Number(amount).toLocaleString('ru-RU')} ₽
          </div>
          <div className="font-golos text-[12px] text-center mb-1" style={{ color: C.sub }}>
            {payer.service}
          </div>
          <div className="font-golos text-[11px]" style={{ color: C.muted }}>
            Право Привилегия
          </div>
        </div>

        {/* Instructions */}
        <div
          className="p-4 mb-5"
          style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14 }}
        >
          <div className="font-golos text-[12px] font-medium mb-3" style={{ color: C.sub }}>
            Как оплатить:
          </div>
          {[
            'Нажмите «Открыть в банке» ниже',
            'Приложение банка откроется автоматически',
            'Подтвердите платёж в приложении',
            'Чек придёт на ' + payer.email,
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3 py-1.5">
              <div
                className="w-5 h-5 flex items-center justify-center shrink-0 font-golos text-[11px] font-bold mt-0.5"
                style={{ background: C.sbpLight, borderRadius: '50%', color: C.sbp }}
              >
                {i + 1}
              </div>
              <span className="font-golos text-[13px]" style={{ color: C.text }}>{step}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => window.open(sbpLink, '_blank')}
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
          {copied ? 'Ссылка скопирована' : 'Скопировать ссылку СБП'}
        </button>

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
export function CardScreen({
  amount,
  payer,
  onBack,
}: {
  amount: string;
  payer: PayerInfo;
  onBack: () => void;
}) {
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
          className="inline-flex items-center gap-1.5 font-golos font-bold px-3 py-1 mb-5"
          style={{ background: C.accentLight, borderRadius: 8, color: C.accent, fontSize: 15 }}
        >
          {Number(amount).toLocaleString('ru-RU')} ₽
        </div>

        <PayerSummary payer={payer} />

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

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: C.border }} />
          <span className="font-golos text-[11px]" style={{ color: C.muted }}>или введите карту</span>
          <div className="flex-1 h-px" style={{ background: C.border }} />
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <InputField
            label="Номер карты"
            value={card.number}
            onChange={v => setCard({ ...card, number: fmtCard(v) })}
            placeholder="0000 0000 0000 0000"
            maxLen={19}
            type="tel"
            required
          />
          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="Срок"
              value={card.expiry}
              onChange={v => setCard({ ...card, expiry: fmtExpiry(v) })}
              placeholder="ММ / ГГ"
              maxLen={7}
              type="tel"
              required
            />
            <InputField
              label="CVV"
              value={card.cvv}
              onChange={v => setCard({ ...card, cvv: v.replace(/\D/g, '').slice(0, 3) })}
              placeholder="•••"
              maxLen={3}
              type="tel"
              required
            />
          </div>
          <InputField
            label="Имя на карте"
            value={card.name}
            onChange={v => setCard({ ...card, name: v.toUpperCase() })}
            placeholder="IVAN IVANOV"
            required
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
            <><Icon name="Loader2" size={18} />Обработка...</>
          ) : (
            <><Icon name="Lock" size={16} />Оплатить {Number(amount).toLocaleString('ru-RU')} ₽</>
          )}
        </button>

        <div
          className="flex items-start gap-3 p-3"
          style={{ background: C.successLight, borderRadius: 10, border: `1px solid rgba(18,160,92,0.15)` }}
        >
          <Icon name="ShieldCheck" size={15} style={{ color: C.success, marginTop: 1 }} />
          <div className="font-golos text-[11px] leading-relaxed" style={{ color: C.success }}>
            Платёж защищён 3-D Secure. Чек придёт на <strong>{payer.email}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── INVOICE SCREEN ─────────────────────────────────────────
export function InvoiceScreen({
  amount,
  payer,
  onBack,
}: {
  amount: string;
  payer: PayerInfo;
  onBack: () => void;
}) {
  const [orgName, setOrgName] = useState('');
  const [sent, setSent] = useState(false);

  const canSend = orgName.trim().length > 1;

  // Реквизиты получателя (подставляются в счёт)
  const REQUISITES = {
    name: 'ООО «Право Привилегия»',
    inn: '6154123456',
    kpp: '615401001',
    bank: 'АО «Тинькофф Банк»',
    bik: '044525974',
    account: '40702810000000000000',
    corr: '30101810145250000974',
  };

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
          Счёт сформирован
        </div>
        <div className="font-golos text-[14px] text-center mb-6" style={{ color: C.sub }}>
          Отправлен на <strong>{payer.email}</strong>
        </div>

        {/* Invoice preview */}
        <div
          className="w-full max-w-sm p-4 mb-6"
          style={{ background: C.surface, border: `1.5px solid ${C.border}`, borderRadius: 14 }}
        >
          {[
            { label: 'Плательщик', value: orgName || payer.fio },
            { label: 'ФИО', value: payer.fio },
            { label: 'Email', value: payer.email },
            ...(payer.inn ? [{ label: 'ИНН', value: payer.inn }] : []),
            { label: 'Услуга', value: payer.service },
          ].map(row => (
            <div key={row.label} className="flex justify-between items-start gap-3 py-2" style={{ borderBottom: `1px solid ${C.border}` }}>
              <span className="font-golos text-[12px] shrink-0" style={{ color: C.sub }}>{row.label}</span>
              <span className="font-golos text-[12px] font-medium text-right" style={{ color: C.text }}>{row.value}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3">
            <span className="font-golos text-[13px]" style={{ color: C.sub }}>Сумма</span>
            <span className="font-golos font-bold text-[18px]" style={{ color: C.accent }}>
              {Number(amount).toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>

        <div
          className="w-full max-w-sm p-4 mb-6"
          style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14 }}
        >
          <div className="font-golos text-[11px] font-medium uppercase tracking-wide mb-3" style={{ color: C.sub }}>
            Реквизиты получателя
          </div>
          {Object.entries(REQUISITES).map(([k, v]) => (
            <div key={k} className="flex justify-between py-1">
              <span className="font-golos text-[11px]" style={{ color: C.muted }}>{k.toUpperCase()}</span>
              <span className="font-golos text-[11px] font-medium" style={{ color: C.text }}>{v}</span>
            </div>
          ))}
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
          Оплата по счёту
        </div>
        <div
          className="inline-flex items-center gap-1.5 font-golos font-bold px-3 py-1 mb-5"
          style={{ background: C.accentLight, borderRadius: 8, color: C.accent, fontSize: 15 }}
        >
          {Number(amount).toLocaleString('ru-RU')} ₽
        </div>

        <PayerSummary payer={payer} />

        {/* Org name */}
        <div className="mb-5">
          <div className="font-golos text-[12px] mb-1.5" style={{ color: C.sub }}>
            Название организации / ФИО ИП <span style={{ color: C.warn }}>*</span>
          </div>
          <input
            type="text"
            value={orgName}
            onChange={e => setOrgName(e.target.value)}
            placeholder="ООО Ромашка или ИП Иванов И.И."
            className="w-full outline-none font-golos text-[15px] px-4 py-3.5 transition-all"
            style={{
              background: C.surface,
              border: `1.5px solid ${orgName.trim().length > 1 ? C.accent : C.border}`,
              borderRadius: 12,
              color: C.text,
            }}
            onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = C.accent)}
            onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = orgName.trim().length > 1 ? C.accent : C.border)}
          />
        </div>

        {/* Requisites preview */}
        <div
          className="p-4 mb-5"
          style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14 }}
        >
          <div className="font-golos text-[11px] font-medium uppercase tracking-wide mb-3" style={{ color: C.sub }}>
            Реквизиты для оплаты
          </div>
          {Object.entries(REQUISITES).map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5" style={{ borderBottom: `1px solid ${C.border}` }}>
              <span className="font-golos text-[12px]" style={{ color: C.muted }}>{k.toUpperCase()}</span>
              <span className="font-golos text-[12px] font-medium text-right" style={{ color: C.text }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Счёт включает */}
        <div
          className="p-4 mb-6"
          style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Icon name="FileText" size={14} style={{ color: C.sub }} />
            <span className="font-golos text-[12px]" style={{ color: C.sub }}>Счёт включает</span>
          </div>
          {[
            'Наименование услуги по договору',
            'Реквизиты организации получателя',
            'Сумма с НДС / без НДС',
            'Назначение платежа',
            'Срок оплаты: 5 рабочих дней',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 py-1.5">
              <Icon name="Check" size={12} style={{ color: C.success }} />
              <span className="font-golos text-[13px]" style={{ color: C.text }}>{item}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => canSend && setSent(true)}
          disabled={!canSend}
          className="w-full font-golos font-semibold text-[16px] py-5 flex items-center justify-center gap-2 transition-all"
          style={{
            background: canSend ? C.success : C.border,
            color: canSend ? '#fff' : C.muted,
            borderRadius: 16,
            cursor: canSend ? 'pointer' : 'not-allowed',
          }}
        >
          <Icon name="Send" size={16} />
          Получить счёт на {payer.email}
        </button>
      </div>
    </div>
  );
}
