import { InjectionToken } from '@angular/core';
import { Product } from './interfaces/shared.type';

/**
 * Constant for HttpClient
 * @type {InjectionToken<string>}
 */
export const SHOPIFY_BASE_URL = new InjectionToken<string>('FB_AITARGET_BASE_URL');

export const fixDeletedProduct = (productList) => {
  return productList.map((product: Product) => {
    const image = new Image();
    image.src = product.image;
    image.onerror = () => {
      product.image = 'https://res.cloudinary.com/aitarget/image/upload/v1551863249/product_not_found_xijzhw.png';
      product.price = '';
      product.title = '';
      product.url = '';
    };
    return product;
  });
};
