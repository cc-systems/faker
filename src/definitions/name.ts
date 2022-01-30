import type { Formats, Texts } from './utils';
import { allOf } from './utils';

export interface NameDefinitions {
  gender: Texts;
  binary_gender: Texts;

  prefix?: Texts;
  female_prefix?: Texts;
  male_prefix?: Texts;

  first_name?: Texts;
  female_first_name?: Texts;
  male_first_name?: Texts;

  middle_name?: Texts;
  female_middle_name?: Texts;
  male_middle_name?: Texts;

  last_name?: Texts;
  female_last_name?: Texts;
  male_last_name?: Texts;

  suffix: Texts;

  name: Formats;

  title: NameTitleDefinitions;
}

export interface NameTitleDefinitions {
  descriptor?: Texts;
  job: Texts;
  level?: Texts;
}

export const names = allOf<keyof NameDefinitions>()(
  'gender',
  'binary_gender',

  'prefix',
  'female_prefix',
  'male_prefix',

  'first_name',
  'female_first_name',
  'male_first_name',

  'middle_name',
  'female_middle_name',
  'male_middle_name',

  'last_name',
  'female_last_name',
  'male_last_name',

  'suffix',

  'name',

  'title'
);