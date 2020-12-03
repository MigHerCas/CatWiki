// Source: https://docs.thecatapi.com/api-reference/models/
type NumberRange = 1 | 2 | 3 | 4 | 5;
type NumberToggle = 0 | 1;

export interface Breed {
  id: string;
  name: string;
  temperament: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  origin: string;
  weight_imperial: string;
  hairless: NumberToggle;
  rare: NumberToggle;
  adaptability: NumberRange;
  affection_level: NumberRange;
  child_friendly: NumberRange;
  grooming: NumberRange;
  intelligence: NumberRange;
  health_issues: NumberRange;
  social_needs: NumberRange;
  stranger_friendly: NumberRange;
}

export interface Favourite {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: string;
  image: Image;
}

export interface Image {
  id: string;
  url: string;
}

export interface Category {
  id: number;
  name: string;
}
