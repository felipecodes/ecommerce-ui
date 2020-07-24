import { PackState } from 'app/modules/product/dto/ProductDTO';

export interface CartStateDTO {
  id: string;
  uuid: string;
  name: string;
  image: string;
  description: string;
  pack: PackState;
}
