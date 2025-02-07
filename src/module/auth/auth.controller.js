import jwt from 'jsonwebtoken'; // JWT for token creation
import bcrypt from 'bcrypt'; // Bcrypt for password hashing/comparison
import nodemailer from "nodemailer";
import { AppError } from '../../utils/AppError.js'; // Custom error handling class
import { catchError } from '../../utils/catchError.js'; // Error handling middleware
import { User } from '../../../data-base/models/user.model.js';
import { HTML } from '../../utils/html.js';


const signup = catchError(async (req, res, next) => {

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, //like ahmed9@gmail.com
        pass: process.env.EMAIL_PASSWORD, //password needed
      },
    });
  
    const otp = (Math.floor(100000 + Math.random() * 900000)).toString();
  
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Ahmed Nasser" <${process.env.EMAIL_USER}>`, // Sender address
      to: req.body.email, // List of receivers
      subject: "Authorization", // Subject line
      text: "Welcome..!", // Plain text body
      html: HTML(otp), // HTML body
    });
  
    req.body.OTP = otp;
    
    // Hash the password before saving
    req.body.password = await bcrypt.hash(req.body.password, 10);
  
    const user = new User(req.body);
    await user.save();
  
    console.log("Message sent to:", req.body.email);
  
    res.json({ message: 'Email sent successfully' });
  });
  
const configurationOTP = catchError(async (req, res, next) => {
  
    let user = await User.findOneAndUpdate(
      { OTP: req.body.otp },
      { confEmail: true, $unset: { OTP: 1 } },
      { new: true }
    );
    if (!user) {
      return next(new AppError('some issue in OTP authorization'));
    }
  
    // Generate JWT token for the new user
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_KEY);
  
    res.status(201).json({ message: 'User added successfully', user, token });
  });
  

const login = catchError(async (req, res, next) => { 
    const user = await User.findOne({ email: req.body.email });


    // Check if user exists and password matches
    if (user &&  bcrypt.compareSync(req.body.password,user.password)) {

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_KEY);
        return res.status(200).json({ message: 'User authenticated successfully', user, token });
    }

    return next(new AppError('Invalid email or password', 401));
});






const simpleLogin = catchError(async (req, res, next) => { 


  const user = new User(req.body);
  await user.save();

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_KEY);
  
  return res.status(200).json({ message: 'User authenticated successfully', user, token });
  
});



// Export the functions for use in other parts of the app
export {
    signup,
    configurationOTP,
    login,
    simpleLogin
};
