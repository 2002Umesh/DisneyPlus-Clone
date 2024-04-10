const { z } = require("zod");

//Creating a object schema
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be of 3 chars." })
    .max(255, { message: "Email must not exceed 255 chars." }),

  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Password must be of 5 chars." })
    .max(1024, { message: "Password must not exceed 1024 chars." }),
});
const signupSchema = loginSchema.extend({

  
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be of 10 chars." })
    .max(10, { message: "Phone must not exceed 20 chars." }),

});


module.exports =  {signupSchema, loginSchema} ;
