# test the api
https://net-task.vercel.app/
---------------------------------------


# all end points 


1- (signup)

 https://net-task.vercel.app/auth/signup

{
    "name": "name",
    "email" : "emample@gmail.com",
    "password": "123456789"
}

---------------------------------------
2- (configuration OTP)

 https://net-task.vercel.app/auth/configuration/OTP

{
    "otp": "123456"
}

---------------------------------------
3- (signin)

 https://net-task.vercel.app/auth/signin

{
    "email" : "emample@gmail.com",
    "password": "123456789"
}

---------------------------------------
4-(login)
 to test all end-point'products without authorization..!

 https://net-task.vercel.app/auth/login
{
    "name":"emaple",
    "email": "example11@exm.com",
    "password":"123456",
    "role": "admin",
    "confEmail": true
}

---------------------------------------

#products end-points


5-(add product) only admin

 https://net-task.vercel.app/products

headers should have token...

{
  "name": "Laptop",
  "category": "Electronics",
  "price": 1500,
  "quantity": 10
}

---------------------------------------
6- (get all)

 https://net-task.vercel.app/products
 
 headers should have token...
 
{

}

---------------------------------------
7- (get product) only admin

 https://net-task.vercel.app/products/id
 
 headers should have token...
 
{

}

---------------------------------------
8- (update product) only admin

 https://net-task.vercel.app/products/id
 
 headers should have token...
 
{
    "name": "Phone"
}

---------------------------------------
9- (delete product) only admin

 https://net-task.vercel.app/products/id
 
 headers should have token...
 
{

}

---------------------------------------


answer

To enhance database performance, we recommend the following optimizations:

Indexing – Proper indexing ensures faster queries and better retrieval efficiency.
Searching by ID – Always use ID-based searches instead of String-based searches, as string lookups are slower and consume more resources.
Pagination – Instead of OFFSET, we should use Keyset Pagination for better performance in large datasets.
Caching – Implementing Redis caching reduces frequent database queries, improving response time.
Sharding – Splitting data across multiple databases enhances scalability and query efficiency.
Partitioning – Dividing large tables into smaller partitions improves query performance and reduces lookup time.
