import { useState } from 'react';
import toast from 'react-hot-toast';

import type { User } from '@/modules/users/domain/User';
import { FormStatus } from '@/types/form';

export function useUserSignInForm(): {
  formStatus: FormStatus;
  submitForm: (formData: Pick<User, 'email' | 'password'>) => void;
  resetFormStatus: () => void;
} {
  const [formStatus, setFormStatus] = useState(FormStatus.Initial);
  // const { createUser } = useUsersContext();

  function submitForm(user: Pick<User, 'email' | 'password'>) {
    setFormStatus(FormStatus.Loading);

    try {
      // createSession(user);
      setFormStatus(FormStatus.Success);
      toast.success('Logged in successfully! 🚀');
    } catch (e) {
      setFormStatus(FormStatus.Error);
      toast.error("Error in your credentials, can't log in! 🌋");
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
