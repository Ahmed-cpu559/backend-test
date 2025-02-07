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
