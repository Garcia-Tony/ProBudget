import { RegistrationForm } from './SignUp.tsx';
import { SignInForm } from './Login.tsx';
type Props = { mode: 'sign-up' | 'log-in' | 'new-expense' };

export function AuthPage({ mode }: Props) {
  return (
    <div className="container m-4">
      {mode === 'sign-up' && <RegistrationForm />}
      {mode === 'log-in' && <SignInForm />}
    </div>
  );
}
