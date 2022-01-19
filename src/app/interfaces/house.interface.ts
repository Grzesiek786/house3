import { HouseStatus } from '../enums/house-status.enum';
import { Address } from './address.interface';

export interface House {
  id: string;
  price: number;
  surface: number;
  status: HouseStatus;
  address: Address;
  photoSource: string;
  photoSources: string[];
}
