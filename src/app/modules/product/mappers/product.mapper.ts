import { CartStateDTO } from 'app/modules/cart/dto/CartDTO';
import { ProductStateDTO, PackState } from '../dto/ProductDTO';

export const mapToCartState = (
  { packs, ...product }: ProductStateDTO,
  selectedPackId: string,
): CartStateDTO => ({
  ...product,
  pack: packs.find((pack) => pack.id === selectedPackId) as PackState,
});
