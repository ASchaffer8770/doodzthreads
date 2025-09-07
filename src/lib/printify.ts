import axios from 'axios';

const printifyApi = axios.create({
  baseURL: 'https://api.printify.com/v1',
  headers: { Authorization: `Bearer ${process.env.PRINTIFY_API_KEY}` },
});

export async function getProducts(shopId: string) {
  try {
    const response = await printifyApi.get(`/shops/${shopId}/products.json`);
    return response.data.data;
  } catch (error) {
    console.error('Printify products error:', error);
    throw error;
  }
}

export async function createOrder(shopId: string, orderData: any) {
  try {
    const response = await printifyApi.post(`/shops/${shopId}/orders.json`, orderData);
    return response.data;
  } catch (error) {
    console.error('Printify order error:', error);
    throw error;
  }
}