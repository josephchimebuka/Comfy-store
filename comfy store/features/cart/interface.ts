export interface ProductAttributes {
  image: string;
  title: string;
  price: number;
  description: string;
  colors: string[];
  company: string;
}

export interface Product {
  attributes: ProductAttributes;
  id: string
}

export interface ProductsData {
  product: Product;
}

export interface LoaderParams {
  id: string;
}