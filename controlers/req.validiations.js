const { z } = require('zod');

const userRegistrationSchema = z.object({
  fullName: z.string({
    required_error: "Full Name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Not a valid email"),
  password: z.string().min(8, { message: "Min 8 chars password required" }),
});
const userLoginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Not a valid email"),
  password: z.string().min(8, { message: "Min 8 chars password required" })
});



// const validateFields = (fields, body) => {
//   const missing = fields.find(field => !body[field]);
//   return missing ? `${missing} is required` : null;
// };

module.exports = { userRegistrationSchema, userLoginSchema };
