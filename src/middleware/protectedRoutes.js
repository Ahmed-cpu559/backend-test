import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError.js";
import { catchError } from "../utils/catchError.js";
import { User } from "../../data-base/models/user.model.js";


// Protect routes middleware to secure endpoints
export const protectedRoutes = catchError(async (req, res, next) => {
    const { token } = req.headers; // Extract token from headers

    // Check if token exists
    if (!token) {
        return next(new AppError('Missing token..!', 401));
    }

    try {
        const userPayload = jwt.verify(token, process.env.JWT_KEY); // Verify the JWT token
        const user = await User.findById(userPayload.id);

        // If user is not found, return error
        if (!user) {
            return next(new AppError('User not found..!', 401));
        }
        
        if (user.isBlocked) {
            return next(new AppError('User is blocked..!', 401));
        }

        if (!user.confEmail) {
            return next(new AppError('User not authorized..!', 401));
        }

        // Attach the user object to the request for further use
        req.user = user; 
        return next(); // Proceed to the next middleware

    } catch (err) {
        return next(new AppError('Invalid token',err, 401)); // Handle token verification error
    }
});
