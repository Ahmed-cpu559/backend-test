import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define schema for the User model
const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },

    email: { type: String, trim: true, required: true, unique: true },

    password: { type: String, required: true },

    role: { type: String, enum: ['admin', 'user'], default: 'user' },

    confEmail: { type: Boolean, default: false },

    isBlocked: { type: Boolean, default: false },
    
    OTP: { type: String }
  },
  {
    timestamps: { updatedAt: false },
    versionKey: false
  }
);


// Create and export the User model
export const User = mongoose.model('User', userSchema);
