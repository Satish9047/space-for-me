export interface ISportCard {
  name: string;
  image: string;
  description: string;
  venues: number;
  icon: string;
}

export type Venue = {
  id: number;
  name: string;
  image: string;
  location: string;
  price: number;
  catagory: string;
  tags: string[];
};
