import { NextResponse } from 'next/server';
import { createOrder } from '@/lib/printify';
import { connectDB } from '@/lib/mongodb';
import Order from '@/models/Order';

export async function POST(request: Request) {
  await connectDB();
  const { userId, items, stripeSessionId } = await request.json();

  try {
    const printifyOrder = await createOrder('your-printify-shop-id', { // Replace with shop ID later
      line_items: items.map((item: any) => ({
        product_id: item.productId,
        variant_id: 'default-variant-id', // Replace with actual variant ID from Printify later
        quantity: item.quantity,
        design: item.design,
      })),
      shipping_method: 1,
      address_to: {
        first_name: 'Test',
        last_name: 'User',
        email: 'test@example.com',
        phone: '123-456-7890',
        country: 'US',
        address1: '123 Test St',
        city: 'Test City',
        state: 'CA',
        zip: '12345',
      },
    });

    await Order.findOneAndUpdate(
      { userId, 'products.productId': items[0].productId },
      { status: 'fulfilled', printifyOrderId: printifyOrder.id },
    );

    return NextResponse.json({ success: true, printifyOrderId: printifyOrder.id });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}