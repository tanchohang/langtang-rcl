import { Button } from '@/components/button/button';
import { ErrorDisplay } from '@/components/forms/error-display/ErrorDisplay';
import { Input } from '../input/Input';

export interface LoginFormIProps {}
const LoginForm = ({}: LoginFormIProps) => {
  return (
    <div className="login_form">
      <ErrorDisplay text="username or password does not match." show={true} />
      <Input name="username" label="Username" type="text" size="md" />
      <Input name="password" label="Password" type="password" size="md" />
      <Button className="mt-5 w-[100%]">Login</Button>
      or Signup
    </div>
  );
};
export { LoginForm };
