import type { LocaleDefinition } from '../..';
import address from './address';
import cell_phone from './cell_phone';
import internet from './internet';
import phone_number from './phone_number';

const en_IE: LocaleDefinition = {
  title: 'English (Ireland)',
  address,
  cell_phone,
  internet,
  phone_number,
};

export default en_IE;
