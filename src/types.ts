export interface Article {
  id: string;
  title: string;
  content: string;
  author_id: string;
  author_name: string;
  category: string;
  created_at: string;
  summary: string;
  image_url?: string;
}

export interface UserProfile {
  id: string;
  full_name: string;
  avatar_url?: string;
  bio?: string;
}
