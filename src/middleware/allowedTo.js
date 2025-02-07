import { catchError } from "../utils/catchError.js";

// Role-based access control middleware
export const allowedTo = (...roles) => {
    return catchError(async (req, res, next) => {
        // Check if the user's role is included in the allowed roles
        if (!roles.includes(req.user.role)) {
            return next(new AppError('Role not authorized..!', 401));
        }
        return next(); // Proceed to the next middleware
    });
};


