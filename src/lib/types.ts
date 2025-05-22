
export interface PostMeta {
  title: string;
  date: string;
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}
