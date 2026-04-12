import { useState } from 'react';
import { Method } from '@/components/payment/paymentColors';
import AmountScreen from '@/components/payment/AmountScreen';
import MethodScreen from '@/components/payment/MethodScreen';
import { SbpScreen, CardScreen, InvoiceScreen } from '@/components/payment/CheckoutScreens';

type Step = 'amount' | 'method' | Method;

export default function Payment() {
  const [step, setStep] = useState<Step>('amount');
  const [amount, setAmount] = useState('');

  if (step === 'amount') {
    return (
      <AmountScreen
        onNext={a => {
          setAmount(a);
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
  if (step === 'sbp') return <SbpScreen amount={amount} onBack={() => setStep('method')} />;
  if (step === 'card') return <CardScreen amount={amount} onBack={() => setStep('method')} />;
  if (step === 'invoice') return <InvoiceScreen amount={amount} onBack={() => setStep('method')} />;

  return null;
}
