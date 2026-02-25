// Простая mock-аутентификация на localStorage
const USERS_KEY = 'rac_users';
const CURRENT_KEY = 'rac_currentUser';

const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
const saveUsers = (users) => localStorage.setItem(USERS_KEY, JSON.stringify(users));

const authService = {
  register: async ({ username, password, role = 'user' }) => {
    const users = getUsers();
    if (users.find(u => u.username === username)) {
      throw new Error('Пользователь с таким именем уже существует');
    }
    const id = Date.now();
    const user = { id, username, password, role };
    users.push(user);
    saveUsers(users);
    const safeUser = { id: user.id, username: user.username, role: user.role };
    localStorage.setItem(CURRENT_KEY, JSON.stringify(safeUser));
    return safeUser;
  },
  login: async ({ username, password }) => {
    const users = getUsers();
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) throw new Error('Неверный логин или пароль');
    const safeUser = { id: found.id, username: found.username, role: found.role };
    localStorage.setItem(CURRENT_KEY, JSON.stringify(safeUser));
    return safeUser;
  },
  logout: () => {
    localStorage.removeItem(CURRENT_KEY);
    return true;
  },
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem(CURRENT_KEY) || 'null');
  }
};

export default authService;
