import { authRouter } from "./auth/auth.routes.js";
import { ProductRouter } from "./product/product.routes.js";

export const bootstrap = (app) => {
  app.use('/auth' , authRouter);
  app.use('/products' ,ProductRouter );
};
