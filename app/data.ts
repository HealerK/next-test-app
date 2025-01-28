export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}
export const sampleUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
  },
];
