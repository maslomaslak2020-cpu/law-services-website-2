import { useState } from 'react';
import { Method, PayerInfo } from '@/components/payment/paymentColors';
import AmountScreen from '@/components/payment/AmountScreen';
import MethodScreen from '@/components/payment/MethodScreen';
import { SbpScreen, CardScreen, InvoiceScreen } from '@/components/payment/CheckoutScreens';

type Step = 'amount' | 'method' | Method;

const DEFAULT_PAYER: PayerInfo = {
  fio: '',
  inn: '',
  email: '',
  service: 'Письменная консультация (разобрать мою ситуацию)',
};

export default function Payment() {
  const [step, setStep] = useState<Step>('amount');
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState<PayerInfo>(DEFAULT_PAYER);

  if (step === 'amount') {
    return (
      <AmountScreen
        onNext={(a, p) => {
          setAmount(a);
          setPayer(p);
          setStep('method');
        }}
      />
    );
  }
  if (step === 'method') {
    return (
      <MethodScreen
        amount={amount}
        onSelect={m => setStep(m)}
        onBack={() => setStep('amount')}
      />
    );
  }
  if (step === 'sbp') return <SbpScreen amount={amount} payer={payer} onBack={() => setStep('method')} />;
  if (step === 'card') return <CardScreen amount={amount} payer={payer} onBack={() => setStep('method')} />;
  if (step === 'invoice') return <InvoiceScreen amount={amount} payer={payer} onBack={() => setStep('method')} />;

  return null;
}
