import { UserRepository } from '@/modules/users/domain/UserRepository';

import { User } from '@/modules/users/domain/User';

export function Users({ repository }: { repository: UserRepository }) {
  const users: User[] = [];
  return (
    <section>
      <h1>🗺️ All users</h1>
      {users.length && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h2>{user.fullName}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
