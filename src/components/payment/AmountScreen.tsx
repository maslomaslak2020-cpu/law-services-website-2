import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { C } from './paymentColors';

export default function AmountScreen({ onNext }: { onNext: (amount: string) => void }) {
  const [amount, setAmount] = useState('');
  const presets = ['500', '1 000', '3 000', '5 000'];

  const clean = (v: string) => v.replace(/\s/g, '');
  const fmt = (v: string) => {
    const n = clean(v).replace(/\D/g, '');
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const valid = Number(clean(amount)) >= 10;

  return (
    <div className="flex flex-col h-full" style={{ minHeight: '100dvh', background: C.bg }}>
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
        className="flex flex-col flex-1 px-5 pt-10 pb-6"
        style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}
      >
        {/* Service info */}
        <div
          className="flex items-center gap-3 p-4 mb-8"
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
          }}
        >
          <div
            className="w-10 h-10 flex items-center justify-center shrink-0"
            style={{ background: C.accentLight, borderRadius: 10 }}
          >
            <Icon name="Scale" size={18} style={{ color: C.accent }} />
          </div>
          <div>
            <div className="font-golos font-semibold text-[14px]" style={{ color: C.text }}>
              Юридическая консультация
            </div>
            <div className="font-golos text-[12px]" style={{ color: C.sub }}>
              Право Привилегия · ИП / ООО / самозанятый
            </div>
          </div>
        </div>

        {/* Amount label */}
        <div className="font-golos text-[13px] font-medium mb-3" style={{ color: C.sub }}>
          Сумма оплаты
        </div>

        {/* Amount input */}
        <div
          className="relative flex items-center mb-4"
          style={{
            background: C.surface,
            border: `2px solid ${valid ? C.accent : C.border}`,
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

        {/* Presets */}
        <div className="flex gap-2 mb-8 flex-wrap">
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

        <div className="flex-1" />

        {/* CTA */}
        <button
          onClick={() => valid && onNext(clean(amount))}
          disabled={!valid}
          className="w-full font-golos font-semibold text-[16px] py-5 transition-all"
          style={{
            background: valid ? C.accent : C.border,
            color: valid ? '#fff' : C.muted,
            borderRadius: 16,
            cursor: valid ? 'pointer' : 'not-allowed',
          }}
        >
          Оплатить {valid ? `${amount} ₽` : ''}
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
