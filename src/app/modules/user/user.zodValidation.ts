import z from 'zod';

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name field is required.'),
    email: z.string().nonempty('Email field is required.').email('Invalid email format'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .nonempty('Password field is required.'),
  }),
});

export const UpdateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name must not be empty').optional(),
    email: z.string().email('Invalid email format').optional(),
    password: z.string().min(6, 'Password must be at least 6 characters long').optional(),
  }),
});

export const UpdateUserRoleValidationSchema = z.object({
  body: z.object({
    email: z.string().nonempty('Email field is required.'),
    role: z.string().nonempty('Role type is required!'),
  }),
});
