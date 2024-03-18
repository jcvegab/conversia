import { useState } from 'react';
import toast from 'react-hot-toast';

import { useUsersContext } from './UsersContext';

import type { User } from '@/modules/users/domain/User';
import { FormStatus } from '@/types/form';

export function useUserSignUpForm(): {
  formStatus: FormStatus;
  submitForm: (formData: Omit<User, 'id'>) => void;
  resetFormStatus: () => void;
} {
  const [formStatus, setFormStatus] = useState(FormStatus.Initial);
  const { createUser } = useUsersContext();

  async function submitForm(user: Omit<User, 'id'>) {
    setFormStatus(FormStatus.Loading);

    try {
      await createUser(user);
      setFormStatus(FormStatus.Success);
      toast.success('User created successfully! 🚀');
    } catch (e) {
      console.error(e);
      setFormStatus(FormStatus.Error);
      toast.error("User with error, can't be created! 🌋");
    }
  }

  function resetFormStatus() {
    setFormStatus(FormStatus.Initial);
  }

  return {
    formStatus,
    submitForm,
    resetFormStatus,
  };
}
