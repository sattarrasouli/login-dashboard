import { z } from 'zod';

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^09\d{9}$/, 'Phone number must be 11 digits starting with 09'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
