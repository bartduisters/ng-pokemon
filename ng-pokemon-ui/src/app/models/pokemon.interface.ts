export enum SpriteKeys {
  BACK_DEFAULT = 'back_default',
  BACK_FEMALE = 'back_female',
  BACK_SHINY = 'back_shiny',
  BACK_SHINY_FEMALE = 'back_shiny_female',
  FRONT_DEFAULT = 'front_default',
  FRONT_FEMALE = 'front_female',
  FRONT_SHINY = 'front_shiny',
  FRONT_SHINY_FEMALE = 'front_shiny_female',
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: { [key in SpriteKeys]: string | null };
}
