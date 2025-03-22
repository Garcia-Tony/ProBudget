const authKey = 'um.auth';
export function saveAuth(user, token) {
  const auth = { user, token };
  localStorage.setItem(authKey, JSON.stringify(auth));
}
export function removeAuth() {
  localStorage.removeItem(authKey);
}
export function readUser() {
  const auth = localStorage.getItem(authKey);
  if (!auth) return undefined;
  return JSON.parse(auth).user;
}
export function readToken() {
  const auth = localStorage.getItem(authKey);
  if (!auth) return undefined;
  return JSON.parse(auth).token;
}
export async function readTodos() {
  const req = {
    headers: { Authorization: `Bearer ${readToken()}` },
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
export async function insertTodo(todo) {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${readToken()}`,
    },
    body: JSON.stringify(todo),
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
export async function updateTodo(todo) {
  const req = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${readToken()}`,
    },
    body: JSON.stringify(todo),
  };
  const res = await fetch(`/api/todos/${todo.todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
export async function removeTodo(todoId) {
  const req = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${readToken()}`,
    },
  };
  const res = await fetch(`/api/todos/${todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
}
