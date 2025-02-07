import mongoose, { Schema } from "mongoose";

// Define schema for the Product model
const productSchema = new Schema(
  {
    name: {type: String,required: true,trim: true,minLength: [2, "Product name is too short!"]},

    category: {type: String,required: true},

    price: {type: Number,required: true,min: 0},

    quantity: {type: Number,required: true,min: 0}
    
  },
  {
    timestamps: true, // This automatically adds `createdAt` and `updatedAt`
    versionKey: false, 
  }
);

// Create and export the Product model
export const Product = mongoose.model("Product", productSchema);
