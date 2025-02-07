import mongoose from 'mongoose';

// Establish database connection
export const dbConnection = mongoose.connect("mongodb+srv://Netway:GF9ZpFH6n164StHI@cluster0.hsx7vm8.mongodb.net/task_Netway")
  .then(() => {
    console.log("Database connected..."); // Log success message on successful connection
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message); // Log error message on failure
  });



  //
  //