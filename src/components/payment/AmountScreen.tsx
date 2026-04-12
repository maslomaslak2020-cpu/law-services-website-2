import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { C, ServiceType, PayerInfo } from './paymentColors';

const SERVICES: ServiceType[] = [
  'Письменная консультация (разобрать мою ситуацию)',
  'Составление документа / договора',
  'Представление интересов в суде',
  'Абонентское юридическое обслуживание',
  'Иное',
];

export default function AmountScreen({
  onNext,
}: {
  onNext: (amount: string, payer: PayerInfo) => void;
}) {
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState<PayerInfo>({
    fio: '',
    inn: '',
    email: '',
    service: SERVICES[0],
  });

  const presets = ['1 000', '3 000', '5 000', '10 000'];

  const clean = (v: string) => v.replace(/\s/g, '');
  const fmt = (v: string) => {
    const n = clean(v).replace(/\D/g, '');
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const amountValid = Number(clean(amount)) >= 10;
  const payerValid = payer.fio.trim().length > 3 && payer.email.includes('@');
  const canProceed = amountValid && payerValid;

  const inputStyle = (filled: boolean) => ({
    background: C.surface,
    border: `1.5px solid ${filled ? C.accent : C.border}`,
    borderRadius: 12,
    color: C.text,
    caretColor: C.accent,
  });

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) =>
    ((e.currentTarget as HTMLElement).style.borderColor = C.accent);
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>, filled: boolean) =>
    ((e.currentTarget as HTMLElement).style.borderColor = filled ? C.accent : C.border);

  return (
    <div className="flex flex-col" style={{ minHeight: '100dvh', background: C.bg }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 pt-12 pb-0"
        style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 flex items-center justify-center font-golos font-bold text-[11px]"
            style={{ background: C.accent, color: '#fff', borderRadius: 6 }}
          >
            ПП
          </div>
          <span className="font-golos font-semibold text-[14px]" style={{ color: C.text }}>
            Право Привилегия
          </span>
        </div>
        <div className="flex items-center gap-1.5" style={{ color: C.success }}>
          <Icon name="Shield" size={13} />
          <span className="font-golos text-[11px] font-medium">Защищено</span>
        </div>
      </div>

      {/* Body */}
      <div
        className="flex flex-col flex-1 px-5 pt-8 pb-8"
        style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}
      >
        {/* Service badge */}
        <div
          className="flex items-center gap-3 p-4 mb-6"
          style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14 }}
        >
          <div
            className="w-10 h-10 flex items-center justify-center shrink-0"
            style={{ background: C.accentLight, borderRadius: 10 }}
          >
            <Icon name="Scale" size={18} style={{ color: C.accent }} />
          </div>
          <div>
            <div className="font-golos font-semibold text-[14px]" style={{ color: C.text }}>
              Оказание юридических услуг по договору
            </div>
            <div className="font-golos text-[12px]" style={{ color: C.sub }}>
              Право Привилегия · ИП / ООО / самозанятый
            </div>
          </div>
        </div>

        {/* Service type */}
        <div className="mb-5">
          <div className="font-golos text-[11px] font-medium tracking-wide uppercase mb-2" style={{ color: C.sub }}>
            Вид услуги
          </div>
          <div className="flex flex-col gap-2">
            {SERVICES.map(s => (
              <button
                key={s}
                onClick={() => setPayer({ ...payer, service: s })}
                className="text-left font-golos text-[13px] px-4 py-3 transition-all"
                style={{
                  background: payer.service === s ? C.accentLight : C.surface,
                  border: `1.5px solid ${payer.service === s ? C.accent : C.border}`,
                  borderRadius: 10,
                  color: payer.service === s ? C.accent : C.text,
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Amount */}
        <div className="font-golos text-[11px] font-medium tracking-wide uppercase mb-2" style={{ color: C.sub }}>
          Сумма оплаты
        </div>
        <div
          className="relative flex items-center mb-3"
          style={{
            background: C.surface,
            border: `2px solid ${amountValid ? C.accent : C.border}`,
            borderRadius: 16,
            transition: 'border-color 0.15s',
          }}
        >
          <span
            className="font-golos font-semibold absolute left-5"
            style={{ fontSize: 28, color: amount ? C.text : C.muted, pointerEvents: 'none' }}
          >
            ₽
          </span>
          <input
            type="text"
            inputMode="numeric"
            value={amount}
            onChange={e => setAmount(fmt(e.target.value))}
            placeholder="0"
            className="w-full outline-none bg-transparent pl-14 pr-5 py-5 font-golos font-semibold"
            style={{ fontSize: 32, color: C.text, caretColor: C.accent }}
          />
        </div>
        <div className="flex gap-2 mb-6 flex-wrap">
          {presets.map(p => (
            <button
              key={p}
              onClick={() => setAmount(p)}
              className="font-golos text-[13px] font-medium px-4 py-2 transition-all"
              style={{
                background: amount === p ? C.accentLight : C.surface,
                border: `1.5px solid ${amount === p ? C.accent : C.border}`,
                borderRadius: 10,
                color: amount === p ? C.accent : C.sub,
              }}
            >
              {p} ₽
            </button>
          ))}
        </div>

        {/* Payer info */}
        <div
          className="p-4 mb-6 flex flex-col gap-4"
          style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14 }}
        >
          <div className="font-golos text-[11px] font-medium tracking-wide uppercase" style={{ color: C.sub }}>
            Данные плательщика
          </div>

          {/* ФИО */}
          <div>
            <div className="font-golos text-[12px] mb-1.5" style={{ color: C.sub }}>
              ФИО <span style={{ color: C.warn }}>*</span>
            </div>
            <input
              type="text"
              value={payer.fio}
              onChange={e => setPayer({ ...payer, fio: e.target.value })}
              placeholder="Иванов Иван Иванович"
              className="w-full outline-none font-golos text-[15px] px-4 py-3.5 transition-all"
              style={inputStyle(payer.fio.length > 3)}
              onFocus={onFocus}
              onBlur={e => onBlur(e, payer.fio.length > 3)}
            />
          </div>

          {/* Email */}
          <div>
            <div className="font-golos text-[12px] mb-1.5" style={{ color: C.sub }}>
              Email для электронного чека <span style={{ color: C.warn }}>*</span>
            </div>
            <input
              type="email"
              value={payer.email}
              onChange={e => setPayer({ ...payer, email: e.target.value })}
              placeholder="ivan@example.com"
              className="w-full outline-none font-golos text-[15px] px-4 py-3.5 transition-all"
              style={inputStyle(payer.email.includes('@'))}
              onFocus={onFocus}
              onBlur={e => onBlur(e, payer.email.includes('@'))}
            />
          </div>

          {/* ИНН (опционально) */}
          <div>
            <div className="font-golos text-[12px] mb-1.5 flex items-center gap-2" style={{ color: C.sub }}>
              ИНН
              <span
                className="font-golos text-[10px] px-1.5 py-0.5"
                style={{ background: C.bg, borderRadius: 4, color: C.muted }}
              >
                опционально
              </span>
            </div>
            <input
              type="text"
              inputMode="numeric"
              value={payer.inn}
              onChange={e => setPayer({ ...payer, inn: e.target.value.replace(/\D/g, '').slice(0, 12) })}
              placeholder="000000000000"
              className="w-full outline-none font-golos text-[15px] px-4 py-3.5 transition-all"
              style={inputStyle(payer.inn.length >= 10)}
              onFocus={onFocus}
              onBlur={e => onBlur(e, payer.inn.length >= 10)}
            />
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => canProceed && onNext(clean(amount), payer)}
          disabled={!canProceed}
          className="w-full font-golos font-semibold text-[16px] py-5 transition-all"
          style={{
            background: canProceed ? C.accent : C.border,
            color: canProceed ? '#fff' : C.muted,
            borderRadius: 16,
            cursor: canProceed ? 'pointer' : 'not-allowed',
          }}
        >
          {canProceed ? `Перейти к оплате · ${amount} ₽` : 'Заполните обязательные поля'}
        </button>

        {/* Trust */}
        <div className="flex items-center justify-center gap-4 mt-4">
          {[
            { icon: 'Lock', label: 'T-Bank эквайринг' },
            { icon: 'ShieldCheck', label: '3-D Secure' },
            { icon: 'FileText', label: '54-ФЗ' },
          ].map(t => (
            <div key={t.label} className="flex items-center gap-1" style={{ color: C.muted }}>
              <Icon name={t.icon as Parameters<typeof Icon>[0]['name']} size={11} />
              <span className="font-golos text-[10px]">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
