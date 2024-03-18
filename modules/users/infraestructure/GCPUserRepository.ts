import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export function createGCPUserRepository(): UserRepository {
  return { save, get, getAll, update };
}

async function save(user: User): Promise<void> {
  console.log('Saving user', user);
}

async function get(id: string): Promise<User | null> {
  console.log('Getting user', id);
  return null;
}

async function getAll(): Promise<User[]> {
  console.log('Getting all users');
  return [];
}

async function update(id: string, user: Partial<User>): Promise<void> {
  console.log('Updating user', user);
}
