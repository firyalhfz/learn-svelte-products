import {
  // error,
  redirect
} from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
  const { fetch, params, url, route } = serverLoadEvent;
  console.log({ params, url, route: route.id });
  const { productId } = params;
  if (productId > 3) {
    // throw error(404, { message: 'Product not found', hint: 'Try a different product' });
    throw redirect(307, '/products');
  }
  const title = 'Product Details';
  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const product = await response.json();
  return {
    title,
    product
  };
};
