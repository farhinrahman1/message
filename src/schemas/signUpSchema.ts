import { z } from 'zod';

export const userNameValidation = z.string().min(2, "Username must be at least 2 characters").max(20, "Username must be at most 20 characters").regex(/^[a-zA-Z0-9_]*$/, "Username must contain only letters, numbers, and underscores");



export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    })