export interface ProductDTO {
  id: string;
  uuid: string;
  name: string;
  image: string;
  description: string;
  packs: Array<{
    id: string;
    uuid: string;
    original_price: number,
    current_price: number,
    status: 'ACTIVE',
    unities: number
  }>
};

export interface PackState {
  id: string;
  uuid: string;
  originalPrice: number,
  currentPrice: number,
  unities: number
}

export interface ProductStateDTO {
  id: string;
  uuid: string;
  name: string;
  image: string;
  description: string;
  packs: Array<PackState>
}
