import { RegistrationForm } from '../components/SignUp';
import { SignInForm } from '../components/Login';

type Props = {
  mode: 'sign-up' | 'log-in';
};
export function AuthPage({ mode }: Props) {
  return (
    <div className="container m-4">
      {mode === 'sign-up' && <RegistrationForm />}
      {mode === 'log-in' && <SignInForm />}
    </div>
  );
}
