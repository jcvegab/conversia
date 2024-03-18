'use client';

import Link from 'next/link';

import Container from '@/components/Container';
import { FormActionButton, FormContainer, FormInput } from '@/components/Form/';
import Spinner from '@/components/Spinner';

import { useModelFormData } from '@/hooks/useModelFormData';
import { useUserSignInForm } from '@/sections/users/useUserSignInForm';

import { User } from '@/modules/users/domain/User';
import { FormStatus } from '@/types/form';

const initialState: Pick<User, 'email' | 'password'> = {
  email: '',
  password: '',
};

export default function Page() {
  const { formData, updateForm } = useModelFormData(initialState);
  const { formStatus, submitForm } = useUserSignInForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(formData);
  };

  if (formStatus === FormStatus.Loading) {
    return <Spinner />;
  }

  return (
    <Container className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <FormContainer>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={(ev) => updateForm({ email: ev.target.value })}
          />
          <FormInput
            label="Password"
            type="password"
            id="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(ev) => updateForm({ password: ev.target.value })}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <Link
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>
          <FormActionButton type="submit">Sign in</FormActionButton>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{' '}
            <Link
              href="/signup"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </FormContainer>
    </Container>
  );
}
