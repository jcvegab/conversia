import Link from 'next/link';
import { useEffect, useState } from 'react';

import { FormActionButton, FormContainer, FormInput } from '@/components/Form';
import Spinner from '@/components/Spinner';

import { isUserEmailValid } from '@/modules/users/domain/UserEmail';
import { isUserImageUrlValid } from '@/modules/users/domain/UserImageUrl';
import {
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  isUserNameValid,
} from '@/modules/users/domain/UserName';
import { isUserPasswordValid } from '@/modules/users/domain/UserPassword';

import { useUserSignUpForm } from './useUserSignUpForm';

import { useModelFormData } from '@/hooks/useModelFormData';

import Container from '@/components/Container';
import { User } from '@/modules/users/domain/User';
import { FormStatus } from '@/types/form';

const initialState: Omit<User, 'id'> = {
  fullName: '',
  imageUrl: '',
  email: '',
  password: '',
};

export function CreateUserForm() {
  const { formData, updateForm } = useModelFormData(initialState);
  const { formStatus, submitForm } = useUserSignUpForm();

  const [errors, setErrors] = useState(initialState);

  useEffect(() => {
    if (formStatus !== FormStatus.Error) return;

    const isFullNameValid = isUserNameValid(formData.fullName);
    const isImageUrlValid = isUserImageUrlValid(formData.imageUrl);
    const isEmailValid = isUserEmailValid(formData.email);
    const isPasswordValid = isUserPasswordValid(formData.password);

    setErrors({
      fullName: isFullNameValid
        ? ''
        : `Fullname must be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} characters long`,
      imageUrl: isImageUrlValid ? '' : 'Image URL is not valid',
      email: isEmailValid ? '' : 'Email is not valid',
      password: isPasswordValid
        ? ''
        : 'Password must have at least 8 characters, one number, one uppercase letter and one special character',
    });
  }, [formStatus, formData]);

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
          Create your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <FormInput
            id="fullName"
            label="Full name*"
            type="text"
            placeholder="Joseph Vega"
            value={formData.fullName}
            onChange={(ev) => updateForm({ fullName: ev.target.value })}
          />
          {errors.fullName && (
            <div style={{ color: 'tomato' }}>{errors.fullName}</div>
          )}
          <FormInput
            id="email"
            label="Email*"
            type="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={(ev) => updateForm({ email: ev.target.value })}
          />
          {errors.email && (
            <div style={{ color: 'tomato' }}>{errors.email}</div>
          )}
          <FormInput
            label="Password*"
            type="password"
            id="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(ev) => updateForm({ password: ev.target.value })}
          />
          {errors.password && (
            <div style={{ color: 'tomato' }}>{errors.password}</div>
          )}
          <FormInput
            label="Avatar URL"
            type="url"
            id="imageUrl"
            placeholder="http://example.com/avatar.png"
            value={formData.imageUrl}
            onChange={(ev) => updateForm({ imageUrl: ev.target.value })}
          />
          {errors.imageUrl && (
            <div style={{ color: 'tomato' }}>{errors.imageUrl}</div>
          )}
          <FormActionButton type="submit">Sign up</FormActionButton>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign in
            </Link>
          </p>
        </form>
      </FormContainer>
    </Container>
  );
}
