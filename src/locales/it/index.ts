import type { LocaleDefinition } from '../..';
import address from './address';
import company from './company';
import internet from './internet';
import name from './name';
import phone_number from './phone_number';

const it: LocaleDefinition = {
  title: 'Italian',
  address,
  company,
  internet,
  name,
  phone_number,
};

export default it;
