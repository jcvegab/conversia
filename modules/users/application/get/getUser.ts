import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';

export async function getUser(
  userRepository: UserRepository,
  userId: string,
): Promise<User | null> {
  return userRepository.get(userId);
}
