import { User, ensureUserIsValid } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';

export async function createUser(
  userRepository: UserRepository,
  user: User,
): Promise<void> {
  ensureUserIsValid(user);
  await userRepository.save(user);
}
