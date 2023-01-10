import data from './tags.json';

export type TagModel = {
  slug: string,
  text: string,
};

export async function getTags(): Promise<TagModel[]> {
  return data.tags;
}
