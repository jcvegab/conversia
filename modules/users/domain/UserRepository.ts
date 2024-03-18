import { User } from './User';

export interface UserRepository {
  save: (user: User) => Promise<void>;
  get: (id: string) => Promise<User | null>;
  getAll: () => Promise<User[]>;
  update: (id: string, user: Partial<User>) => Promise<void>;
}
