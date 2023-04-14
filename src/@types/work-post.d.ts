export type WorkPost = {
  content: string;
  metadata: Partial<WorkPostMetadata>;
  slug: string;
};

export type WorkPostMetadata = {
  title: string;
};
