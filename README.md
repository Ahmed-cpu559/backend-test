i used atlas for database cloud   and vercel for production

# test the api
https://net-task.vercel.app/
---------------------------------------


# all end points 


1- (signup)  --> POST

 https://net-task.vercel.app/auth/signup

{
    "name": "example",
    "email" : "example@gmail.com",
    "password": "123456789"
}

---------------------------------------
2- (configuration OTP)  --> POST

 https://net-task.vercel.app/auth/configuration/OTP

{
    "otp": "123456"
}

---------------------------------------
3- (signin)  --> POST

 https://net-task.vercel.app/auth/signin

{
    "email" : "example@gmail.com",
    "password": "123456789"
}

---------------------------------------
4-(login)  --> POST
 to test all product's end-point without authorization..!

 https://net-task.vercel.app/auth/login
{
    "name":"example",
    "email": "example@exm.com",
    "password":"123456",
    "role": "admin",
    "confEmail": true
}

---------------------------------------

#products end-points


5-(add product) only admin    --> POST

 https://net-task.vercel.app/products

headers should have token...

{
  "name": "Laptop",
  "category": "Electronics",
  "price": 1500,
  "quantity": 10
}

---------------------------------------
6- (get all)  --> GET

 https://net-task.vercel.app/products
 
 headers should have token...
 
{

}

---------------------------------------
7- (get product)  --> GET

 https://net-task.vercel.app/products/id
 
 headers should have token...
 
{

}

---------------------------------------
8- (update product) only admin   --> PATCH 

 https://net-task.vercel.app/products/id
 
 headers should have token...
 
{
    "name": "Phone"
}

---------------------------------------
9- (delete product) only admin     --> DELETE 

 https://net-task.vercel.app/products/id
 
 headers should have token...
 
{

}

---------------------------------------


# To enhance database performance, we recommend the following optimizations:

1-Indexing – Proper indexing ensures faster queries and better retrieval efficiency.

2-Searching by ID – Always use ID-based searches instead of String-based searches, as string lookups are slower and consume more resources.

3-Pagination – Instead of OFFSET, we should use Keyset Pagination for better performance in large datasets.

4-Caching – Implementing Redis caching reduces frequent database queries, improving response time.

5-Sharding – Splitting data across multiple databases enhances scalability and query efficiency.

6-Partitioning – Dividing large tables into smaller partitions improves query performance and reduces lookup time.
