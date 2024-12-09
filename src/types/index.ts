export type Markdown = {
  filename: string;
  tags: string[];
  category: string;
  created: string;
  title: string;
  id: string;
};

export type Database = {
  dictionary: { [key: string]: Markdown };
  list: string[];
  rList: string[];
  tags: { [key: string]: string[] };
  titles: { id: string; title: string; category: string }[];
  categories: { [key: string]: string[] };
  categoryOrigins: { [key: string]: string };
};

export type IconLink = {
  [key: string]: string;
};
