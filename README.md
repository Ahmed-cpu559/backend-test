# Net Task API

## Overview
Net Task API is a cloud-based backend solution deployed on Vercel, using MongoDB Atlas as the database. This API provides authentication, authorization, and product management features.

### Base URL:
```
https://net-task.vercel.app/
```

---
## Authentication Endpoints

### 1. Sign Up - `POST /auth/signup`
**Endpoint:**
```
https://net-task.vercel.app/auth/signup
```
**Request Body:**
```json
{
    "name": "example",
    "email": "example@gmail.com",
    "password": "123456789"
}
```

### 2. Configure OTP - `POST /auth/configuration/OTP`
**Endpoint:**
```
https://net-task.vercel.app/auth/configuration/OTP
```
**Request Body:**
```json
{
    "otp": "123456"
}
```

### 3. Sign In - `POST /auth/signin`
**Endpoint:**
```
https://net-task.vercel.app/auth/signin
```
**Request Body:**
```json
{
    "email": "example@gmail.com",
    "password": "123456789"
}
```

### 4. Login (Test Mode) - `POST /auth/login`
**Endpoint:**
```
https://net-task.vercel.app/auth/login
```
**Request Body:**
```json
{
    "name": "example",
    "email": "example@exm.com",
    "password": "123456",
    "role": "admin",
    "confEmail": true
}
```

---
## Product Management Endpoints

### 5. Add Product (Admin Only) - `POST /products`
**Endpoint:**
```
https://net-task.vercel.app/products
```
**Headers:** (Requires Authentication Token)
```json
{
  "Authorization": "Bearer <token>"
}
```
**Request Body:**
```json
{
  "name": "Laptop",
  "category": "Electronics",
  "price": 1500,
  "quantity": 10
}
```

### 6. Get All Products - `GET /products`
**Endpoint:**
```
https://net-task.vercel.app/products
```
**Headers:** (Requires Authentication Token)
```json
{
  "Authorization": "Bearer <token>"
}
```

### 7. Get a Product - `GET /products/:id`
**Endpoint:**
```
https://net-task.vercel.app/products/:id
```
**Headers:** (Requires Authentication Token)
```json
{
  "Authorization": "Bearer <token>"
}
```

### 8. Update Product (Admin Only) - `PATCH /products/:id`
**Endpoint:**
```
https://net-task.vercel.app/products/:id
```
**Headers:** (Requires Authentication Token)
```json
{
  "Authorization": "Bearer <token>"
}
```
**Request Body:**
```json
{
    "name": "Phone"
}
```

### 9. Delete Product (Admin Only) - `DELETE /products/:id`
**Endpoint:**
```
https://net-task.vercel.app/products/:id
```
**Headers:** (Requires Authentication Token)
```json
{
  "Authorization": "Bearer <token>"
}
```

---
## Database Performance Optimizations
To enhance database performance, we implement the following best practices:

1. **Indexing** – Proper indexing ensures faster queries and better retrieval efficiency.
2. **Searching by ID** – Always use ID-based searches instead of string-based searches for efficiency.
3. **Pagination** – Use Keyset Pagination instead of OFFSET for handling large datasets.
4. **Caching** – Implement Redis caching to reduce frequent database queries and improve response time.
5. **Sharding** – Distribute data across multiple databases for better scalability and performance.
6. **Partitioning** – Divide large tables into smaller partitions to enhance query performance.

---
## Deployment
- **Database:** MongoDB Atlas
- **Hosting:** Vercel

For any issues, please open an issue on GitHub.

---
### Author
Ahmed Abdel Nasser Mohamed

