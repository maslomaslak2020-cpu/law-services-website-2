import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

const G = '#C8A35F';
const DEEP = '#081629';
const NAVY = '#0B1F3A';
const PROSE = 'rgba(201,212,227,0.82)';
const MUTED = 'rgba(201,212,227,0.5)';

interface Props {
  onClose: () => void;
}

export default function SituationModal({ onClose }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', situation: '' });
  const [files, setFiles] = useState<File[]>([]);
  const [sent, setSent] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...newFiles].slice(0, 10));
  };

  const removeFile = (i: number) => {
    setFiles(prev => prev.filter((_, idx) => idx !== i));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...dropped].slice(0, 10));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} Б`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} КБ`;
    return `${(bytes / 1024 / 1024).toFixed(1)} МБ`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(8,22,41,0.92)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
        style={{ background: NAVY, border: '1px solid rgba(200,163,95,0.2)' }}
      >
        {/* Шапка */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-px" style={{ backgroundColor: G }} />
              <span className="font-golos text-[10px] tracking-[0.25em] uppercase" style={{ color: G }}>заявка</span>
            </div>
            <h2 className="font-cormorant font-semibold text-white text-[26px] leading-tight">
              Разобрать мою ситуацию
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center shrink-0 transition-opacity hover:opacity-70 mt-1"
            style={{ border: '1px solid rgba(200,163,95,0.2)', color: MUTED }}
          >
            <Icon name="X" size={16} />
          </button>
        </div>

        <div className="p-6">
          {sent ? (
            <div className="py-10 text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center mb-5" style={{ border: `1px solid ${G}`, color: G }}>
                <Icon name="Check" size={24} />
              </div>
              <div className="font-cormorant font-semibold text-white text-[26px] mb-2">Заявка принята</div>
              <p className="font-golos text-[14px]" style={{ color: PROSE }}>
                Свяжемся с вами в течение рабочего дня
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Имя */}
              <div>
                <label className="block font-golos text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: MUTED }}>
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                  className="w-full font-golos text-[14px] px-4 py-3 outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(200,163,95,0.18)', color: '#fff' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.18)')}
                />
              </div>

              {/* Телефон */}
              <div>
                <label className="block font-golos text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: MUTED }}>
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full font-golos text-[14px] px-4 py-3 outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(200,163,95,0.18)', color: '#fff' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.18)')}
                />
              </div>

              {/* Ситуация */}
              <div>
                <label className="block font-golos text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: MUTED }}>
                  Опишите ситуацию
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.situation}
                  onChange={e => setForm({ ...form, situation: e.target.value })}
                  placeholder="Кратко опишите вашу проблему или вопрос..."
                  className="w-full font-golos text-[14px] px-4 py-3 outline-none resize-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(200,163,95,0.18)', color: '#fff' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,163,95,0.18)')}
                />
              </div>

              {/* Прикрепление файлов */}
              <div>
                <label className="block font-golos text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: MUTED }}>
                  Документы и файлы <span style={{ color: 'rgba(201,212,227,0.3)' }}>(необязательно, до 10 файлов)</span>
                </label>

                {/* Зона дропа */}
                <div
                  className="cursor-pointer transition-all"
                  style={{ border: '1px dashed rgba(200,163,95,0.25)', background: 'rgba(200,163,95,0.03)' }}
                  onClick={() => fileRef.current?.click()}
                  onDragOver={e => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <div className="py-6 text-center">
                    <div className="w-9 h-9 mx-auto flex items-center justify-center mb-3" style={{ color: G, opacity: 0.6 }}>
                      <Icon name="Paperclip" size={18} />
                    </div>
                    <p className="font-golos text-[13px]" style={{ color: MUTED }}>
                      Нажмите или перетащите файлы сюда
                    </p>
                    <p className="font-golos text-[11px] mt-1" style={{ color: 'rgba(201,212,227,0.3)' }}>
                      PDF, JPG, PNG, DOC, DOCX — до 20 МБ каждый
                    </p>
                  </div>
                </div>

                <input
                  ref={fileRef}
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="hidden"
                  onChange={handleFiles}
                />

                {/* Список файлов */}
                {files.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {files.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between px-3 py-2"
                        style={{ background: 'rgba(200,163,95,0.06)', border: '1px solid rgba(200,163,95,0.12)' }}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <Icon name="File" size={13} style={{ color: G, flexShrink: 0 }} />
                          <span className="font-golos text-[12px] text-white truncate">{f.name}</span>
                          <span className="font-golos text-[11px] shrink-0" style={{ color: MUTED }}>
                            {formatSize(f.size)}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="shrink-0 ml-2 transition-opacity hover:opacity-60"
                          style={{ color: MUTED }}
                        >
                          <Icon name="X" size={13} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <p className="font-golos text-[11px]" style={{ color: 'rgba(201,212,227,0.3)' }}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>

              <button
                type="submit"
                className="w-full font-golos font-semibold text-[14px] py-4 transition-opacity hover:opacity-85"
                style={{ background: G, color: DEEP }}
              >
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
