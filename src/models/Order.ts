import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema({
  userId: { type: String, required: true }, // Or use auth user ID
  cartItems: [
    {
      designId: String,
      clothingType: String,
      quantity: Number,
    },
  ],
  stripeSessionId: { type: String, required: true },
  printifyOrderId: { type: String }, // Set after fulfillment
  status: { type: String, default: 'pending' }, // e.g., 'paid', 'fulfilled'
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);