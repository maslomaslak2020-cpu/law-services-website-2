import Icon from '@/components/ui/icon';
import { C, Method } from './paymentColors';

export default function MethodScreen({
  amount,
  onSelect,
  onBack,
}: {
  amount: string;
  onSelect: (m: Method) => void;
  onBack: () => void;
}) {
  const methods: { id: Method; icon: string; title: string; sub: string; badge?: string }[] = [
    { id: 'sbp', icon: 'Zap', title: 'Быстрая оплата', sub: 'СБП · QR-код · любой банк', badge: 'Быстрее всего' },
    { id: 'card', icon: 'CreditCard', title: 'Банковская карта', sub: 'Visa · Mastercard · Мир' },
    { id: 'invoice', icon: 'FileText', title: 'Получить счёт', sub: 'На email · для юрлиц и ИП' },
  ];

  return (
    <div style={{ minHeight: '100dvh', background: C.bg }}>
      <div className="px-5 pt-12 pb-6" style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>

        {/* Back */}
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 mb-8 font-golos text-[13px] transition-opacity hover:opacity-60"
          style={{ color: C.sub }}
        >
          <Icon name="ChevronLeft" size={16} />
          Назад
        </button>

        {/* Amount pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6"
          style={{ background: C.accentLight, borderRadius: 100 }}
        >
          <span className="font-golos font-bold text-[22px]" style={{ color: C.accent }}>
            {Number(amount).toLocaleString('ru-RU')} ₽
          </span>
        </div>

        <div className="font-golos font-semibold text-[20px] mb-2" style={{ color: C.text }}>
          Выберите способ
        </div>
        <div className="font-golos text-[13px] mb-7" style={{ color: C.sub }}>
          Юридическая консультация
        </div>

        {/* Methods */}
        <div className="flex flex-col gap-3">
          {methods.map(m => (
            <button
              key={m.id}
              onClick={() => onSelect(m.id)}
              className="flex items-center gap-4 p-4 text-left transition-all group"
              style={{
                background: C.surface,
                border: `1.5px solid ${C.border}`,
                borderRadius: 16,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = C.accent;
                (e.currentTarget as HTMLElement).style.background = C.accentLight;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = C.border;
                (e.currentTarget as HTMLElement).style.background = C.surface;
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 flex items-center justify-center shrink-0"
                style={{
                  background: m.id === 'sbp' ? C.sbpLight : m.id === 'card' ? C.accentLight : C.successLight,
                  borderRadius: 12,
                  color: m.id === 'sbp' ? C.sbp : m.id === 'card' ? C.accent : C.success,
                }}
              >
                <Icon name={m.icon as Parameters<typeof Icon>[0]['name']} size={20} />
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-golos font-semibold text-[15px]" style={{ color: C.text }}>
                    {m.title}
                  </span>
                  {m.badge && (
                    <span
                      className="font-golos text-[10px] font-semibold px-2 py-0.5"
                      style={{
                        background: 'rgba(30,136,229,0.1)',
                        color: C.sbp,
                        borderRadius: 6,
                      }}
                    >
                      {m.badge}
                    </span>
                  )}
                </div>
                <span className="font-golos text-[12px]" style={{ color: C.sub }}>
                  {m.sub}
                </span>
              </div>

              <Icon name="ChevronRight" size={18} style={{ color: C.muted }} />
            </button>
          ))}
        </div>

        {/* Trust bar */}
        <div
          className="flex items-center justify-between mt-8 pt-5"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          {[
            { icon: 'Lock', label: 'Шифрование' },
            { icon: 'Building2', label: 'T-Bank' },
            { icon: 'BadgeCheck', label: '54-ФЗ' },
          ].map(t => (
            <div key={t.label} className="flex items-center gap-1.5" style={{ color: C.muted }}>
              <Icon name={t.icon as Parameters<typeof Icon>[0]['name']} size={13} />
              <span className="font-golos text-[11px]">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
