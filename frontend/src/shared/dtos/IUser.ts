export interface IUser {
  id?: number | null;
  name: string;
  email: string;
  password: string;
  topic_id: number | null;
  message_id: number;
}
