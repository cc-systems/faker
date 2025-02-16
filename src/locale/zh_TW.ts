import { Faker } from '..';
import zh_TW from '../locales/zh_TW';
import en from '../locales/en';

const faker = new Faker({
  locale: 'zh_TW',
  localeFallback: 'en',
  locales: {
    zh_TW,
    en,
  },
});

export = faker;
