'use server';

export async function fetchUsers() {
  try {
    const response = await fetch('/api/users');
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Server Error: ', error);
    throw new Error('Failed to fetch users');
  }
}
