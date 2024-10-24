export interface ITopics {
  id?: number;
  title: string;
  content: string;
  likes?: number | null;
  responses_count?: number | null;
  status?: string | null;
  user_id?: string | null;
  user_name?: string | null;
}
