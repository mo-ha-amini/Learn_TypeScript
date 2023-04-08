interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  image?: string;
}

const users: Array<User> = [];
const fetchUser: User | null = null;

function getActiveUsers(count: number): User[]{
    return users.slice(0, count)
}